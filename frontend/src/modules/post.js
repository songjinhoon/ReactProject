import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import { takeLatest } from "../../node_modules/redux-saga/effects";
import * as postApi from "../lib/api/post";

const [READ_POST, READ_POST_SUCCESS, READ_POST_FAILURE] = createRequestActionTypes('post/READ_POST');
const UNLOAD_POST = 'post/UNLOAD_POST';
const [LIST_POST, LIST_POST_SUCCESS, LIST_POST_FAILURE] = createRequestActionTypes('post/LIST_POST');

export const readPost = createAction(READ_POST, id => id);
export const unloadPost = createAction(UNLOAD_POST);
export const listPost = createAction(LIST_POST, ({ tag, username, page }) => ({ tag, username, page }));

const readPostSaga = createRequestSaga(READ_POST, postApi.readPost);
const listPostSaga = createRequestSaga(LIST_POST, postApi.listPost);
export function* postSaga() {
    yield takeLatest(READ_POST, readPostSaga);
    yield takeLatest(LIST_POST, listPostSaga);
}

const initialState = {
    post: null,
    error: null,
    posts: null,
    lastPage: 1
};

const post = handleActions({
    [READ_POST_SUCCESS]: (state, { payload: post }) => ({
        ...state,
        post
    }),
    [READ_POST_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error
    }),
    // @@@@@@
    // 포스트 페이지를 벗어날 때 리덕스의 상태를 비우는 액션이다.
    // 상태를 비우지 않는다면, 나중에 사용자가 특정 포스트를 읽고 목록으로 돌아간뒤 다른 포스트를 읽을 때 이전에 불러왔던 포스트그 나타나는 깜박임 현상이 발생한다.
    [UNLOAD_POST]: () => initialState,
    [LIST_POST_SUCCESS]: (state, { payload: posts, meta: response }) => ({
        ...state,
        posts,
        lasPage: parseInt(response.headers[`last-page`], 10)
    }),
    [LIST_POST_FAILURE]: (state, { payload: error }) => ({
        ...state, 
        error
    })
}, initialState);

export default post;