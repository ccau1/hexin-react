import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { AccountTypes } from "./actions";
import { reset, setField } from "../utils/reducer";

export const INITIAL_STATE = Immutable({
  user: null,
  token: null
});

/* ------------- Reducers ------------- */

/* ------------- Hookup Reducers To Types ------------- */

export default createReducer(INITIAL_STATE, {
  [AccountTypes.SET_USER]: setField("user", "user"),
  [AccountTypes.SET_TOKEN]: setField("token", "token"),
  [AccountTypes.RESET]: reset(INITIAL_STATE)
});
