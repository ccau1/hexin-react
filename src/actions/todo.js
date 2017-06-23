/* @flow */

import * as types from './types';
import type {Action, Todo} from 'src/types';

export const getTodos = (): Action => {

  // TODO:: Fetch from DB
  const timestamp = new Date().getTime();
  let idCounter = 1;
  const mock_todos = [
    {
      _id: idCounter++,
      name: 'todo 1',
      timestamp: timestamp,
      isComplete: false
    },
    {
      _id: idCounter++,
      name: 'todo 2',
      timestamp: timestamp,
      isComplete: false
    },
    {
      _id: idCounter++,
      name: 'todo 3',
      timestamp: timestamp,
      isComplete: true
    },
    {
      _id: idCounter++,
      name: 'todo 4',
      timestamp: timestamp,
      isComplete: true
    }
  ];


  return (dispatch) => {
    return dispatch({
      type: types.TODOS_FETCH + types.ActionStates.COMPLETE,
      payload: mock_todos
    });
  };
};

export const toggleTodo = (todo: Todo): Action => {
  return (dispatch) => {

    return dispatch({
      type: types.TODO_SET,
      payload: {...todo, isComplete: !todo.isComplete}
    });
  };
};

export const deleteTodo = (todo: Todo): Action => {
  return (dispatch) => {
    return dispatch({
      type: types.TODO_DELETE,
      payload: todo
    });
  };
};


export const addTodo = (todo: Todo): Action => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      const timestamp = new Date().getTime();
      todo.timestamp = timestamp;
      todo._id = '' + timestamp;
      dispatch({
        type: types.TODO_ADD,
        payload: todo
      });
      resolve(todo);
    });
  };
};
