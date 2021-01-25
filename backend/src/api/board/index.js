import Router from 'koa-router';
import * as boardController from './boardController';
import checkLoggedIn from '../../lib/checkLoggedIn';

const board = new Router();

board.get('/:id', boardController.getBoardById, boardController.read);
board.post('/', checkLoggedIn, boardController.write);

export default board;