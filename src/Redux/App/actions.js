import { createActions } from "reduxsauce";

export const { Types: AppTypes, Creators: AppActions } = createActions(
  {
    /* ------------- Reducers ------------- */
    toggleSidebarOpen: ["isOpen"],
    reset: null
  },
  { prefix: "App/" }
);
