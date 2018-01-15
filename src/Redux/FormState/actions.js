import { createActions } from "reduxsauce";

export const {
  Types: FormStateTypes,
  Creators: FormStateActions
} = createActions({
  setFormComplete: ["form", "isComplete"],
  reset: null
});
