import Post from '../model/post';
import mongoose from 'mongoose';
import Joi from '@hapi/joi';

const {ObjectId} = mongoose.Types;
export const checkObjectId = (ctx, next) => {
    const {id} = ctx.params;
    if(!ObjectId.isValid(id)){
        ctx.status = 400;
        return;
    }
    return next();
}

export const list =  async ctx => {
    try{
        const posts = await Post.find().exec();
        ctx.body = posts;
    }catch(e){
        ctx.throw(500, e);
    }
};

export const read = ctx => {
    const {title, body, tags} = ctx.request.body;
    const post = new Post({title, body, tags});
    try{
        await post.save();
        ctx.body = post;
    }catch(e){
        ctx.throw(500, e);
    }
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
        const post = new Post({title, body, tags});
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

export const update = ctx => {

};