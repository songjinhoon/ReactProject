import Router from 'koa-router';
import * as postController from './postController';
import checkLoggedIn from '../../lib/checkLoggedIn';

const post = new Router();

post.get('/', postController.list);
post.get('/:id', postController.getPostById, postController.read);
post.post('/', checkLoggedIn, postController.write);
post.delete('/:id', postController.getPostById, checkLoggedIn, postController.checkOwnPost, postController.remove);
post.patch('/:id', postController.getPostById, checkLoggedIn, postController.checkOwnPost, postController.update);

export default post;