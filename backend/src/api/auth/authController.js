import Joi from '../../../node_modules/@hapi/joi';
import User from '../../model/user';

export const register = async ctx => {
    const schema = Joi.object().keys({
        username: Joi.string().alphanum().min(3).max(20).required(),
        password: Joi.string().required()
    });
    const scheamCheck = schema.validate(ctx.request.body);
    if(scheamCheck.error){
        ctx.status = 400;
        ctx.body = scheamCheck.error;
        return ;
    }else{
        const { username, password } = ctx.request.body;
        try{
            const exists = await User.findByUsername(username);
            if(exists) {
                ctx.status = 409;
                return;
            }
            const user = new User({ username });
            await user.setPassword(password);
            await user.save();
            ctx.body = user.serialize();

            ctx.cookies.set('access_token', user.generateToken(), {
                maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
                httpOnly: true
            });
        }catch(e) {
            ctx.throw(500, e);
        }
    }
};

export const login = async ctx => {
    const {username, password} = ctx.request.body;
    if(!username || !password){
        console.log(ctx);
        ctx.status = 401;
        return;
    }else{
        try{
            const user = await User.findByUsername(username);
            if(!user){
                ctx.status = 401;
                return;
            }
            const valid = await user.checkPassword(password);
            if(!valid){
                ctx.status = 401;
                return;
            }
            ctx.body = user.serialize();

            const token = user.generateToken();
            ctx.cookies.set('access_token', token, {
                maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
                httpOnly: true
            });
        }catch(e){
            ctx.throw(500, e);
        }
    }
};

export const check = async ctx => {
    const {user} = ctx.state;
    if(!user){
        ctx.status = 401;
        return;
    }
    ctx.body = user;
};

export const logout = async ctx => {
    ctx.cookies.set('access_token');
    ctx.status = 204;
};
