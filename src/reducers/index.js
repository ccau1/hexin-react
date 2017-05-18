/* @flow */
import {combineReducers} from 'redux';
import * as intlReducer from './intl';
import * as accountReducer from './account';
import * as contactReducer from './contact';
import * as todoReducer from './todo';
import * as formReducer from './form';

export default combineReducers(Object.assign({},
  formReducer,
  intlReducer,
  accountReducer,
  contactReducer,
  todoReducer,
));
