import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import *as authAPI from '../lib/api/auth';
import { takeLatest } from 'redux-saga/effects';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITAILIZE_FORM';
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes('auth/REGISTER'); // 구조 분해 할당
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');

export const changeField = createAction(CHANGE_FIELD, ({form, key, value}) => ({form, key, value}));
export const initializeForm = createAction(INITIALIZE_FORM, (form) => { return form; });
export const register = createAction(REGISTER, ({username, password}) => ({username, password}));
export const login = createAction(LOGIN, ({username, password}) => ({username, password}));

const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
export function* authSaga(){
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
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
  [REGISTER_SUCCESS]: (state, {payload: auth}) => {
    console.log('시점3@');
    return ({...state, authError: null, auth});
  },
  [REGISTER_FAILURE]: (state, {payload: error}) => {
    console.log('시점4@');
    return ({...state, authError: error});
  },
  [LOGIN_SUCCESS]: (state, {payload: auth}) => ({...state, authError: null, auth}),
  [LOGIN_FAILURE]: (state, {payload: error}) => ({...state, authError: error}),
}, initialState);

export default auth;
