/* @flow */
// import {Map} from 'immutable';
import createReducer from 'lib/createReducer';
import * as types from 'actions/types';
const ActionStates = types.ActionStates;

const initialState = {
  items: [],
};

export const todo = createReducer(initialState, {
  [types.TODO_ADD]: (state, action) => {
    let newItemArr = state.items.slice(0);
    newItemArr.push(action.payload);
    return {...state, items: newItemArr};
  },
  [types.TODOS_FETCH + ActionStates.COMPLETE]: (state, action) => {
    return {...state, items: action.payload};
  },
  [types.TODO_SET]: (state, action) => {
    let newItemArr = state.items.slice(0);
    const todoIndex = state.items.findIndex(item => item._id === action.payload._id);
    if (todoIndex > -1) {
      newItemArr[todoIndex] = action.payload;
    }
    return {...state, items: newItemArr};
  },
  [types.TODO_DELETE]: (state, action) => {
    let newItemArr = state.items.slice(0);
    const todoIndex = state.items.findIndex(item => item._id === action.payload._id);
    console.log('huh', todoIndex);
    if (todoIndex > -1) {
      newItemArr.splice(todoIndex, 1);
    }
    return {...state, items: newItemArr};
  },
});
