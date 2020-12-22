import { finishLoading, startLoading } from "./loading";
import { takeLatest, put, call } from '../frontend/node_modules/redux-saga/effects';
import { createAction, handleActions } from 'redux-actions';
import { login, register, check } from '../frontend/src/lib/api/auth';

/*
    1. 비동기 통신 체크 리덕스 모듈
*/
const GET_CHECK = 'authCheck/GET_CHECK';
const GET_CHECK_SUCCESS = 'authCheck/GET_CHECK_SUCCESS';
const GET_CHECK_FAILURE = 'authCheck/GET_CHECK_FAILURE';

export const getCheck = createAction(GET_CHECK);

function* checkSaga(){
    console.log('들어옴');
    yield put(startLoading(GET_CHECK));
    try{
        const response = yield call(check);
        yield put({
            type: GET_CHECK_SUCCESS,
            payload: response.data
        })
    }catch(e){
        yield put({
            type: GET_CHECK_FAILURE,
            payload: e,
            error: true
        })
    }
    yield put(finishLoading(GET_CHECK));
}

export function* authCheckSaga(){
    yield takeLatest(GET_CHECK, checkSaga);
}

const initialState = {
    auth: null
};

const authCheck = handleActions({
    [GET_CHECK_SUCCESS]: (state, action) => ({
        ...state,
        auth: action.payload
    }),
    [GET_CHECK_FAILURE]: (state, action) => ({
        ...state,
        auth: action.payload
    })
}, initialState);

export default authCheck;
