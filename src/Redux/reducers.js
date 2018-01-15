import { combineReducers } from "redux";
import Immutable from "seamless-immutable";
import intl from "./Intl/reducers";
import account from "./Account/reducers";
import forms from "./Forms/reducers";
import loading from "./Loading/reducers";
import error from "./Error/reducers";
import { routerReducer } from "react-router-redux";

const reducer = combineReducers(
  Immutable({
    routing: routerReducer,
    intl,
    account,
    forms,
    error,
    loading
  })
);

export default reducer;
