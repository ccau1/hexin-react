import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { reset } from "../utils/reducer";
import { setArray } from "../utils";

import { FormStateTypes } from "./actions";

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  login: {
    dirty: {},
    complete: false
  },
  register: {
    dirty: {},
    complete: false
  }
});

/* ------------- Reducers ------------- */

const setFormComplete = (state, { form, isComplete }) =>
  Immutable.setIn(state, [form, "complete"], isComplete);

/* ------------- Hookup Reducers To Types ------------- */

export default createReducer(INITIAL_STATE, {
  [FormStateTypes.SET_FORM_COMPLETE]: setFormComplete,
  [FormStateTypes.RESET]: reset(INITIAL_STATE)
});
