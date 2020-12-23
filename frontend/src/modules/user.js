import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as authApi from '../lib/api/auth';
import { handleActions, createAction } from "redux-actions";
import { takeLatest } from '../../node_modules/redux-saga/effects';

/*
    - 사용자 상태 처리 리덕스 모듈
*/
const [GET_CHECK, GET_CHECK_SUCCESS, GET_CHECK_FAILURE] = createRequestActionTypes('user/GET_CHECK');

export const getCheck = createAction(GET_CHECK);

const getCheckSaga = createRequestSaga(GET_CHECK, authApi.check);
export function* userSaga(){
    yield takeLatest(GET_CHECK, getCheckSaga);
}

const initialState = {
    user: null,
    checkError: null
};

const user = handleActions({
    [GET_CHECK_SUCCESS]: (state, {payload: user}) => ({
        ...state,
        user,
        checkError: null
    }),
    [GET_CHECK_FAILURE]: (state, {payload: error}) => ({
        ...state,
        user: null,
        checkError: error
    })
}, initialState);

export default user;