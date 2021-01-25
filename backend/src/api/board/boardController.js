import Joi from '@hapi/joi';
import mongoose from 'mongoose';
import Board from '../../model/board';

export const write = async ctx => {
    const schema = Joi.object().keys({
        title: Joi.string().required(),
        content: Joi.string().required()
    });
    if(schema.validate(ctx.request.body).error) {
        ctx.status = 400; // Bad Request
        ctx.body = schema.validate(ctx.request.body).error;
        return ;
    }else {
        const { title, content } = ctx.request.body;
        const board = new Board({
            title, 
            content,
            user: ctx.state.user
        });
        try {
            await board.save();
            ctx.body = board;
            console.log('::SERVER:: 게시글 등록 완료');
            console.log(board);
        }catch(e) {
            ctx.throw(500, e);
        }
    }
};

export const getBoardById = async (ctx, next) => {
    const { id } = ctx.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        ctx.status = 400; // Bad Request
        return ;
    }else {
        try {
            const board = await Board.findById(id);
            if(board) {
                ctx.state.board = board;
                return next();
            }else {
                ctx.status = 404; // Not Found
                return ;
            }
        }catch(e) {
            ctx.throw(500, e);
        }
    }
};

export const read = ctx => {
    ctx.body = ctx.state.board;
};
