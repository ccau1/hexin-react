import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { reset } from '../utils/reducer';

import { ErrorTypes } from './actions';

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  // login: null,
  reset: null
});

/* ------------- Reducers ------------- */

/* ------------- Hookup Reducers To Types ------------- */

export default createReducer(INITIAL_STATE, {
  // [ErrorTypes.SET_LOGIN_ERROR]: setField("login", "errors"),
  [ErrorTypes.RESET]: reset(INITIAL_STATE)
});
