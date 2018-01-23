import { all, takeLatest, call, put } from "redux-saga/effects";
import { AccountActions, AccountTypes } from "./actions";
import { startSubmit, stopSubmit } from "redux-form";
import { FORM_NAME } from "../../Components/App/LoginForm";
import { getErrorFromResponse } from "../utils/saga";

export function* login(api, action) {
  // Fetch fields from action
  const { username, password } = action;

  // Start form submit
  yield put(startSubmit(FORM_NAME));

  // Fetch token based on action username & password
  let tokenResponse = yield call(api.getToken, username, password);

  // If response not okay, throw form error
  if (!tokenResponse.ok) {
    yield put(
      stopSubmit(FORM_NAME, getErrorFromResponse(FORM_NAME, tokenResponse))
    );
    return;
  }
  // Store token
  api.self.setHeader("Authorization", "bearer " + tokenResponse.data.token);
  yield put(AccountActions.setToken(tokenResponse.data.token));

  // Fetch user based on the token
  const userResponse = yield call(api.getAccountUser);
  // If response not okay, throw form error
  if (!userResponse.ok) {
    yield put(
      stopSubmit(FORM_NAME, getErrorFromResponse(FORM_NAME, userResponse))
    );
    return;
  }
  // Set user
  yield put(AccountActions.setUser(userResponse.data));
  // Stop submit
  yield put(stopSubmit(FORM_NAME));
}

export default function* roots(api) {
  yield all([takeLatest(AccountTypes.LOGIN, login, api)]);
}
