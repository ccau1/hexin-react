import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { AppTypes } from "./actions";
import { reset, toggleField } from "../utils/reducer";

export const INITIAL_STATE = Immutable({
  isSidebarOpen: false,
  isHeaderMenuOpen: false
});

/* ------------- Reducers ------------- */

/* ------------- Hookup Reducers To Types ------------- */

export default createReducer(INITIAL_STATE, {
  [AppTypes.TOGGLE_SIDEBAR_OPEN]: toggleField("isSidebarOpen", "isOpen"),
  [AppTypes.TOGGLE_HEADER_MENU_OPEN]: toggleField("isHeaderMenuOpen", "isOpen"),
  [AppTypes.RESET]: reset(INITIAL_STATE)
});
