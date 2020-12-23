import { combineReducers } from 'redux';
import { all } from '../../node_modules/redux-saga/effects';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';

const rootReducer = combineReducers({auth, user});

export function* rootSaga(){
    yield all([authSaga(), userSaga()]);
}

export default rootReducer;