/* @flow */

export default function createReducer(initialState: Object, handlers: Object): Function {
  return function reducer(state: Object = initialState, action: Object) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}
