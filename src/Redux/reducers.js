import { combineReducers } from "redux";
import Immutable from "seamless-immutable";
import intl from "./Intl/reducer";

const reducer = combineReducers(
  Immutable({
    intl
  })
);

export default reducer;
