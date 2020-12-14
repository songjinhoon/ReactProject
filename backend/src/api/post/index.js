import Router from 'koa-router';
import * as postController from './postController';

const post = new Router();

post.get('/', postController.list);
post.get('/:id', postController.read);
post.post('/', postController.write);
post.delete('/:id', postController.remove);
post.patch('/:id', postController.update);

export default post;