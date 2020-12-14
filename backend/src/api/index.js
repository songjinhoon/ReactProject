import Router from 'koa-router';
import post from './post';

const api = new Router();

api.use('/post', post.routes());

export default api;