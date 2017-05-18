/* @flow */
// import {Map} from 'immutable';
// import createReducer from 'lib/createReducer';
// import * as types from 'actions/types';
// const {ActionStates} = types;
import {reducer as formReducer} from 'redux-form';
import * as types from 'actions/types';

export const form = formReducer.plugin({
  Todo: (state, action) => {
    switch (action.type) {
    case types.TODO_ADD:
      return undefined;
    default:
      return state;
    }
  },
});
