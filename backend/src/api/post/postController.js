import Post from '../../model/post';
import mongoose from 'mongoose';
import Joi from '@hapi/joi';

const {ObjectId} = mongoose.Types;
export const getPostById = async (ctx, next) => {
    const {id} = ctx.params;
    if(!ObjectId.isValid(id)){
        ctx.status = 400;
        return;
    }else{
        try{
            const post = await Post.findById(id);
            if(post){
                ctx.state.post = post;
                return next();
            }else{
                ctx.status = 404;
                return;
            }
        }catch(e){
            ctx.throw(500, e);
        }
    }
}
export const checkOwnPost = (ctx, next) => {
    const {user, post} = ctx.state;
    if(post.user._id.toString() === user._id){
        return next();
    }else{
        ctx.status = 403;
        return ;
    }
};


export const list = async ctx => {
    const page = parseInt(ctx.query.page || '1', 10);
    if(page < 1){
        ctx.status = 400;
        return;
    }else{
        const {tag, username} = ctx.query;
        const query = {
            ...(username ? { 'user.username': username } : {}),
            ...(tag ? { tags: tag} : {})
        };
        try{
            const posts = await Post.find(query).sort({_id: -1}).limit(10).skip((page - 1)*10).exec();
            const postCount = await Post.countDocuments(query).exec();
            ctx.set('Last-Page', Math.ceil(postCount / 10));
            ctx.body = posts.map(post => post.toJSON()).map(post => ({...post, body: post.body.length < 200 ? post.body : `${post.body.slice(0,200)}...`}));
        }catch(e){
            ctx.throw(500, e);
        }
    }
};

export const read = async ctx => {
    ctx.body = ctx.state.post;
};

export const write = async ctx => {
    const schema = Joi.object().keys({
        title: Joi.string().required(),
        body: Joi.string().required(),
        tags: Joi.array().items(Joi.string()).required()
    });
    if(schema.validate(ctx.request.body).error){
        ctx.status = 400;
        ctx.body = schema.validate(ctx.request.body).error;
        return;
    }else{
        const {title, body, tags} = ctx.request.body;
        const post = new Post({title, body, tags, user: ctx.state.user});
        try{
            await post.save();
            ctx.body = post;
        }catch(e){
            ctx.throw(500, e);
        }
    }
};

export const remove = ctx => {

};

export const update = async ctx => {
    const schema = Joi.object().keys({
        title: Joi.string(),
        body: Joi.string(),
        tags: Joi.array().items(Joi.string())
    });
    if(schema.validate(ctx.request.body).error){
        ctx.status = 400;
        ctx.body = schema.validate(ctx.request.body).error;
        return;
    }else{
        try{
            const {id} = ctx.params;
            const post = await Post.findByIdAndUpdate(id, ctx.request.body, {new: true}).exec();
            if(!post){
                ctx.status = 404;
                return;
            }
            ctx.body = post;
        }catch(e){
            ctx.throw(500, e);
        }
    }
};