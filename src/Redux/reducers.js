import { combineReducers } from 'redux';
import Immutable from 'seamless-immutable';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import intl from './Intl/reducers';
import account from './Account/reducers';
// import forms from "./Forms/reducers";
import loading from './Loading/reducers';
import error from './Error/reducers';
import app from './App/reducers';

const reducer = combineReducers(
  Immutable({
    routing,
    intl,
    account,
    form,
    error,
    loading,
    app
  })
);

export default reducer;
