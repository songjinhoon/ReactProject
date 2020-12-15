require('dotenv').config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import api from './api';
import createFakeData from './createFakeData';
import jwtMiddleware from './lib/jwtMiddleware';

const {PORT, MONGO_URI} = process.env;

/* DB 연결 */
mongoose.connect(MONGO_URI, {useNewUrlParser: true, useFindAndModify: false})
    .then(() => {
        console.log('Connected to MongoDB');
        //createFakeData();
    })
    .catch(e => {
        console.error(e);
    });
/* ----- */

const app = new Koa();
const router = new Router();

/* Router 설정 */
router.use('/api', api.routes());

/* Koa 설정 */
app.use(bodyParser()); // 라우터 적용 전에 bodyParser 적용
app.use(jwtMiddleware); // jwt미들웨어 적용
app.use(router.routes()).use(router.allowedMethods()); // 서버에 라우터 적용

const port = PORT || 4000; 
app.listen(port, () => {
    console.log('Listening to port %d', port);
});