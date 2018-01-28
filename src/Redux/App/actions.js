import { createActions } from "reduxsauce";

export const { Types: AppTypes, Creators: AppActions } = createActions(
  {
    /* ------------- Reducers ------------- */
    toggleSidebarOpen: ["isOpen"],
    toggleAvatarMenuOpen: ["isOpen"],
    reset: null
  },
  { prefix: "App/" }
);
