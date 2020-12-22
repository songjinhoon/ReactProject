import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as authApi from '../lib/api/auth';
import { takeLatest } from '../../node_modules/redux-saga/effects';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITAILIZE_FORM';
const [POST_REGISTER, POST_REGISTER_SUCCESS, POST_REGISTER_FAILURE] = createRequestActionTypes('auth/POST_REGISTER');
const [POST_LOGIN, POST_LOGIN_SUCCESS, POST_LOGIN_FAILURE] = createRequestActionTypes('auth/POST_LOGIN');

export const changeField = createAction(CHANGE_FIELD, ({form, key, value}) => ({form, key, value}));
export const initializeForm = createAction(INITIALIZE_FORM, form => form);
export const postRegister = createAction(POST_REGISTER, ({username, password}) => ({username, password}));
export const postLogin = createAction(POST_LOGIN, ({username, password}) => ({username, password}));

const registerSaga = createRequestSaga(POST_REGISTER, authApi.register);
const loginSaga = createRequestSaga(POST_LOGIN, authApi.login);
export function* authSaga(){
  yield takeLatest(POST_REGISTER, registerSaga);
  yield takeLatest(POST_LOGIN, loginSaga);
}

const initialState = {
    register: {
        username: "",
        password: "",
        passwordConfirm: "",
    },
    login: {
        username: "",
        password: "",
    },
    auth: null,
    authError: null
};

const auth = handleActions({
  [CHANGE_FIELD]: (state, {payload: {form, key, value}}) => ({...state, [form]: {...state[form], [key]: value}}),
  [INITIALIZE_FORM]: (state, {payload: form}) => ({...state, authError: null, [form]: initialState[form]}),
  [POST_REGISTER_SUCCESS]: (state, {payload: auth}) => ({...state, authError: null, auth}),
  [POST_REGISTER_FAILURE]: (state, {payload: error}) =>  ({...state, authError: error}),
  [POST_LOGIN_SUCCESS]: (state, {payload: auth}) => ({...state, authError: null, auth}),
  [POST_LOGIN_FAILURE]: (state, {payload: error}) => ({...state, authError: error}),
}, initialState);

export default auth;
