import { createActions } from "reduxsauce";

export const { Types: ErrorTypes, Creators: ErrorActions } = createActions(
  {
    reset: null
  },
  { prefix: "Error/" }
);
