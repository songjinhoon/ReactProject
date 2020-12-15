import Router from 'koa-router';
import * as postController from './postController';

const post = new Router();

post.get('/', postController.list);
post.get('/:id', postController.checkObjectId, postController.read);
post.post('/', postController.write);
post.delete('/:id', postController.checkObjectId, postController.remove);
post.patch('/:id', postController.checkObjectId, postController.update);

export default post;