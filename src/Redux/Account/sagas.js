import { all, takeLatest, call, put } from "redux-saga/effects";
import { AccountActions, AccountTypes } from "./actions";
import { startSubmit, stopSubmit } from "redux-form";

export function* login(api, action) {
  // yield _setLoadingAndErrors(true);
  const { username, password } = action;

  const FORM_LOGIN = "login";
  yield put(startSubmit(FORM_LOGIN));
  // make the call to the api
  let tokenResponse = yield call(api.getToken, username, password);

  if (!tokenResponse.ok) {
    if (!tokenResponse.status) {
      yield put(stopSubmit(FORM_LOGIN, { errors: "server down" }));
    } else if (tokenResponse.status === 400) {
      yield put(
        stopSubmit(
          FORM_LOGIN,
          typeof tokenResponse.data === "string"
            ? { _error: tokenResponse.data }
            : tokenResponse.data
        )
      );
    } else {
      yield put(
        stopSubmit(FORM_LOGIN, { username: "username/password incorrect" })
      );
    }
    return;
  }
  // store token
  api.self.setHeader("Authorization", "bearer " + tokenResponse.data.token);
  yield put(AccountActions.setToken(tokenResponse.data.token));

  const userResponse = yield call(api.getAccountUser);
  if (userResponse.ok) {
    // store user
    yield put(AccountActions.setUser(userResponse.data));
  }
  yield put(stopSubmit("login"));
}

export default function* roots(api) {
  yield all([takeLatest(AccountTypes.LOGIN, login, api)]);
}
