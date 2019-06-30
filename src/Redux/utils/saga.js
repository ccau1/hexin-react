import { put } from "redux-saga/effects";

export const handleResponse = response =>
  function*(onSuccess, onFailed) {
    // console.log('res', response)
    if (response.ok) {
      yield onSuccess(response.data);
    } else {
      yield onFailed(response.data);
    }
  };

// Trigger loadingFn twice, once before and once after fn. Before state = state[0], after state = state[1]
export const stateWrap = (
  loadingFn,
  fn,
  /* istanbul ignore next */ states = [true, false]
) =>
  function*(...args) {
    yield put(loadingFn(states[0]));
    yield fn.apply(this, args);
    yield put(loadingFn(states[1]));
  };

export const handleLoading = (loadingFn, fn) =>
  stateWrap(loadingFn, fn, [true, false]);

export const getErrorFromResponse = (formName, response) => {
  let error = {};
  if (!response.status) {
    error = { _error: "server down" };
  } else if (response.status === 400) {
    error =
      typeof response.data === "string"
        ? { _error: response.data }
        : response.data;
  } else if (response.status >= 500) {
    error = { _error: "Server Issue" };
  } else {
    error = { _error: "unknown error" };
  }

  return error;
};
