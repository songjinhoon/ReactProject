import { createAction, handleActions } from 'redux-actions';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITAILIZE_FORM';

export const changeField = createAction(CHANGE_FIELD, ({form, key, value}) => ({form, key, value}));
export const initializeForm = createAction(INITIALIZE_FORM, (form) => { return form; });

const initialState = {
    register: {
        username: "",
        password: "",
        passwordConfirm: "",
    },
    login: {
        username: "",
        password: "",
    }
};

const auth = handleActions({
  // [CHANGE_FIELD]: (state, action) => {
  //   return {
  //     ...state,
  //     [action.payload.form]: {
  //       ...state[action.payload.form],
  //       [action.payload.key]: action.payload.value,
  //     }
  //   };
  // },
  [CHANGE_FIELD]: (state, {payload: {form, key, value}}) => {
    return ({
      ...state,
      [form]: {
        ...state[form],
        [key]: value,
      }
    });
  },
  [INITIALIZE_FORM]: (state, {payload: form}) => {
    return ({
      ...state,
      [form]: initialState[form],
    });
  },
}, initialState);

export default auth;
