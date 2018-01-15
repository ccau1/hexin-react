import { createActions } from "reduxsauce";

export const { Types: ErrorTypes, Creators: ErrorActions } = createActions({
  setLoginError: ["errors"],
  setRegisterError: ["errors"],
  reset: null
});
