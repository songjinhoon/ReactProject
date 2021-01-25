import { handleActions, createAction } from "../../node_modules/redux-actions";
import { takeLatest, call } from "../../node_modules/redux-saga/effects";
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as authApi from "../lib/api/auth";

const [CHECK_USER, CHECK_USER_SUCCESS, CHECK_USER_FAILURE] = createRequestActionTypes('user/CHECK_USER');
const TEMP_SET_USER = 'user/TEMP_SET_USER';
const LOGOUT_USER = 'user/LOGOUT_USER';

export const checkUser = createAction(CHECK_USER);
export const tempSetUser = createAction(TEMP_SET_USER, user => user); // 이거 ?
export const logoutUser = createAction(LOGOUT_USER);

const checkUserSaga = createRequestSaga(CHECK_USER, authApi.check);
function checkUserFailureSaga() {
    try{
        localStorage.removeItem('user');
    }catch(e){
        console.log('localStorage is not working');
    }
}
function* logoutUserSaga(){
    try {
        yield call(authApi.logout);
        localStorage.removeItem('user');
    }catch(e) {
        console.log(e);
    }
}
export function* userSaga(){
    yield takeLatest(CHECK_USER, checkUserSaga);
    yield takeLatest(CHECK_USER_FAILURE, checkUserFailureSaga);
    yield takeLatest(LOGOUT_USER, logoutUserSaga);
}

const initialState = {
    user: null,
    checkUserError: null
};

const user = handleActions({
    //[CHECK_USER_SUCCESS]: (state, { payload: user }) => ({ ...state, user, checkUserError: null }),
    //[CHECK_USER_FAILURE]: (state, { payload: error }) => ({ ...state, user: null, checkUserError: error }),
    //[LOGOUT_USER]: (state) => ({ ...state,  user: null }),
    [CHECK_USER_SUCCESS]: (state, action) => ({ ...state, user: action.payload, checkUserError: null }),
    [CHECK_USER_FAILURE]: (state, action) => ({ ...state, user: null, checkUserError: action.payload }),
    [TEMP_SET_USER]: (state, action) => ({ ...state, user: action.payload }),
    [LOGOUT_USER]: () => initialState,
}, initialState);

export default user;
