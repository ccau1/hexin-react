import { createActions } from "reduxsauce";

export const { Types: LoadingTypes, Creators: LoadingActions } = createActions({
  toggleLogin: ["isLoading"],
  toggleRegister: ["isLoading"]
});
