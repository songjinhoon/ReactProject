import { takeLatest } from '../../node_modules/redux-saga/effects';
import { createAction, handleActions } from '../../node_modules/redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as boardApi from '../lib/api/board';

const INITIALIZE_FORM = "board/INITIALIZE_FORM";
const CHANGE_FIELD = "board/CHANGE_FIELD";
const RESET_BOARD = "board/RESET_BOARD";
const [WRITE_BOARD, WRITE_BOARD_SUCCESS, WRITE_BOARD_FAILURE] = createRequestActionTypes("board/WRITE_BOARD");
const [READ_BOARD, READ_BOARD_SUCCESS, READ_BOARD_FAILURE] = createRequestActionTypes("board/READ_BOARD");
const [LIST_BOARD, LIST_BOARD_SUCCESS, LIST_BOARD_FAILURE] = createRequestActionTypes("board/LIST_BOARD");

export const initializeForm = createAction(INITIALIZE_FORM);
export const changeField = createAction(CHANGE_FIELD,  ({ form, key, value }) => ({ form, key, value }));
export const resetBoard = createAction(RESET_BOARD);
export const writeBoard = createAction(WRITE_BOARD, ({ title, content }) => ({ title, content }));
export const readBoard = createAction(READ_BOARD, id => id );
export const listBoard = createAction(LIST_BOARD);

const writeSaga = createRequestSaga(WRITE_BOARD, boardApi.write);
const readSaga = createRequestSaga(READ_BOARD, boardApi.read)
export function* boardSaga() {
    yield takeLatest(WRITE_BOARD, writeSaga);
    yield takeLatest(READ_BOARD, readSaga);
}

const initialState = {
    write: {
        title: '',
        content: ''
    },
    board: null,
    error: null
};

const board = handleActions({
    [INITIALIZE_FORM]: () => initialState,
    [CHANGE_FIELD]: (state, action) => ({
        ...state,
        [action.payload.form]: {
            ...state[action.payload.form],
            [action.payload.key]: action.payload.value
        }
    }),
    [RESET_BOARD]: () => initialState,
    [WRITE_BOARD_SUCCESS]: (state, action) => ({ ...state, board: action.payload, error: null }),
    [WRITE_BOARD_FAILURE]: (state, action) => ({ ...state, board: null, error: action.error }),
    [READ_BOARD_SUCCESS]: (state, action) => ({ ...state, board: action.payload, error: null }),
    [READ_BOARD_FAILURE]: (state, action) => ({ ...state, board: null, error: action.error }),
}, initialState);

export default board;