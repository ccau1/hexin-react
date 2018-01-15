import { createActions } from "reduxsauce";

export const { Types: FormTypes, Creators: FormActions } = createActions({
  setLoginForm: ["form"],
  resetLoginForm: null,
  updateFormField: ["form", "field", "data"],
  reset: null
});
