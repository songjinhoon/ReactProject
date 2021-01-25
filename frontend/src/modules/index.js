import { combineReducers } from 'redux';
import { all } from '../../node_modules/redux-saga/effects';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import write, { writeSaga } from './write';
import post, { postSaga } from './post';
import board, { boardSaga } from './board';

const rootReducer = combineReducers({auth, user, write, post, board});

export function* rootSaga(){
    yield all([authSaga(), userSaga(), writeSaga(), postSaga(), boardSaga()]);
}

export default rootReducer;