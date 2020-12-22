import Router from 'koa-router';
import * as authController from './authController';

const auth = new Router();

auth.post('/register', authController.register);
auth.post('/login', authController.login);
auth.get('/check', authController.check);
auth.post('/logout', authController.logout);

export default auth;