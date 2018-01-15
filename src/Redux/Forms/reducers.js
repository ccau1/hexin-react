import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { reset } from "../utils/reducer";
import { setArray } from "../utils";

import { FormTypes } from "./actions";

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  login: {
    username: "",
    password: "",
    rememberMe: false
  },
  register: {
    email: "",
    password: "",
    confirmPassword: ""
  }
});

/* ------------- Reducers ------------- */

const resetForm = field => state =>
  Immutable.set(state, field, INITIAL_STATE[field]);

const updateForm = field => (state, { form }) => {
  console.log("upp", field, state, form);
  return Immutable.set(state, field, form);
};

const updateFormField = (state, { form, field, data }) =>
  Immutable.setIn(state, setArray(form).concat(setArray(field)), data);

/* ------------- Hookup Reducers To Types ------------- */

export default createReducer(INITIAL_STATE, {
  [FormTypes.SET_LOGIN_FORM]: updateForm("login"),
  [FormTypes.RESET_LOGIN_FORM]: resetForm("login"),
  [FormTypes.UPDATE_FORM_FIELD]: updateFormField,
  [FormTypes.RESET]: reset(INITIAL_STATE)
});
