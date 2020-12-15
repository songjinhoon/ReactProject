import Router from 'koa-router';
import post from './post';
import auth from './auth';

const api = new Router();

api.use('/post', post.routes());
api.use('/auth', auth.routes());

export default api;