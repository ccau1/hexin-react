import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
// import { LoadingTypes } from "./actions";

export const INITIAL_STATE = Immutable({
  // login: null
});

// const toggleField = fieldName => (state, { isLoading }) =>
//   Immutable.setIn(
//     state,
//     Array.isArray(fieldName) ? fieldName : [fieldName],
//     isLoading
//   );

export default createReducer(INITIAL_STATE, {
  // [LoadingTypes.TOGGLE_LOGIN]: toggleField("login")
});
