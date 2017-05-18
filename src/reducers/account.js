/* @flow */
// import {Map} from 'immutable';
import createReducer from 'lib/createReducer';
import * as types from 'actions/types';
const {ActionStates} = types;

const initialState = {
  user: null,
};

export const account = createReducer(initialState, {
  [types.ACCOUNT_LOGIN + ActionStates.COMPLETE]: (state, action) => {
    return {...state};
  },
  [types.ACCOUNT_LOGOUT + ActionStates.REQUEST]: (state, action) => {
    return {...state, user: null};
  },
  [types.ACCOUNT_SIGNUP + ActionStates.COMPLETE]: (state, action) => {
    return {...state, user: action.payload};
  },
  [types.ACCOUNT_USER_FETCH + ActionStates.COMPLETE]: (state, action) => {
    return {...state, user: action.payload};
  },
});
