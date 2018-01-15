import { all, takeLatest, call, put } from "redux-saga/effects";
import { AccountActions, AccountTypes } from "./actions";
import { LoadingActions } from "../Loading/actions";
import { ErrorActions } from "../Error/actions";

export function* login(api, action) {
  // yield _setLoadingAndErrors(true);
  const { username, password } = action;

  // make the call to the api
  let tokenResponse = yield call(api.getToken, username, password);

  if (!tokenResponse.ok) {
    yield put(LoadingActions.toggleLogin(false));
    yield put(
      ErrorActions.setLoginError({ _error: "username/password incorrect" })
    );
    return;
  }
  // store token
  api.self.setHeader("Authorization", "bearer " + tokenResponse.data.token);
  console.log("tokenResponse.data.token", tokenResponse.data.token);
  yield put(AccountActions.setToken(tokenResponse.data.token));

  const userResponse = yield call(api.getAccountUser);
  if (userResponse.ok) {
    // store user
    yield put(AccountActions.setUser(userResponse.data));
  }
  yield put(LoadingActions.toggleLogin(false));
  ErrorActions.setLoginError(null);
}

export default function* roots(api) {
  yield all([
    takeLatest(AccountTypes.LOGIN, login, api)
    // takeLatest(AccountActions.LOGOUT, logout, api),
    // takeLatest(AccountActions.REGISTER, register, api),
    // takeLatest(AccountActions.UPDATE_USER, updateUser, api),
    // takeLatest(
    //   AccountActions.UPDATE_PREFERENCE_CATEGORIES,
    //   updatePreferenceCategories,
    //   api
    // )
    //   takeLatest(AccountActions.FORGOT_PASSWORD, forgotPassword, api)
  ]);
}
