import { all, fork } from "redux-saga/effects";
import AccountSagas from "./Account/sagas";
import API from "../Services/APIs";

const api = API.create("http://localhost:8280/api");

export default function* root() {
  yield all([fork(AccountSagas, api)]);
}
