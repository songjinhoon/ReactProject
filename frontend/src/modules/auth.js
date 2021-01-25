import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as authApi from '../lib/api/auth';
import { takeLatest } from '../../node_modules/redux-saga/effects';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITAILIZE_FORM';
const [REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE] = createRequestActionTypes('auth/REGISTER_USER');
const [LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE] = createRequestActionTypes('auth/LOGIN_USER');
// const [REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE] = createRequestActionTypes('auth/REGISTER_USER');
// const [LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE] = createRequestActionTypes('auth/LOGIN_USER');

export const changeField = createAction(CHANGE_FIELD, ({form, key, value}) => ({form, key, value}));
export const initializeForm = createAction(INITIALIZE_FORM, form => form);
export const registerUser = createAction(REGISTER_USER, ({ username, password }) => ({ username, password }));
export const loginUser = createAction(LOGIN_USER, ({ username, password }) => ({ username, password }));
// export const postRegister = createAction(REGISTER_USER, ({username, password}) => ({username, password}));
// export const postLogin = createAction(LOGIN_USER, ({username, password}) => ({username, password}));

const registerSaga = createRequestSaga(REGISTER_USER, authApi.register);
const loginSaga = createRequestSaga(LOGIN_USER, authApi.login);
export function* authSaga(){
    yield takeLatest(REGISTER_USER, registerSaga);
    yield takeLatest(LOGIN_USER, loginSaga);
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
  [CHANGE_FIELD]: (state, { payload: { form, key, value }}) => ({...state, [form]: {...state[form], [key]: value}}),
  [INITIALIZE_FORM]: (state, {payload: form}) => ({...state, authError: null, [form]: initialState[form]}),
  [REGISTER_USER_SUCCESS]: (state, {payload: auth}) => ({...state, authError: null, auth}),
  [REGISTER_USER_FAILURE]: (state, {payload: error}) =>  ({...state, authError: error}),
  [LOGIN_USER_SUCCESS]: (state, {payload: auth}) => ({...state, authError: null, auth}),
  [LOGIN_USER_FAILURE]: (state, {payload: error}) => ({...state, authError: error}),
}, initialState);

export default auth;