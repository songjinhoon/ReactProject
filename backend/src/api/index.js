import Router from 'koa-router';
import post from './post';
import auth from './auth';
import board from './board';

const api = new Router();

api.use('/post', post.routes());
api.use('/auth', auth.routes());
api.use('/board', board.routes());

export default api;