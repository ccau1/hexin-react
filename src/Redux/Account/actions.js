import { createActions } from "reduxsauce";

export const { Types: AccountTypes, Creators: AccountActions } = createActions({
  /* ------------- Sagas ------------- */
  login: ["username", "password"],

  /* ------------- Reducers ------------- */
  setUser: ["user"],
  setToken: ["token"],
  reset: null
});
