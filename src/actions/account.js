/* @flow */

import * as types from './types';
import type {Action, SignUpForm, LoginForm} from 'src/types';
import request, {setAccessToken, killAccessToken} from 'lib/request';


export const signUp = (signUpForm: SignUpForm): Action => {
  return {
    name: types.ACCOUNT_SIGNUP,
    callAPI: request('auth/register', {method: 'POST', data: signUpForm}),
  };
};

export const login = (loginForm: LoginForm): Action => {
  return {
    name: types.ACCOUNT_LOGIN,
    callAPI: request('auth/token', {method: 'POST', data: loginForm}),
    onComplete: (accessToken, {dispatch, getState}) => {
      setAccessToken(accessToken);
    },
  };
};

export const logout = (): Action => {
  killAccessToken();
  return {
    name: types.ACCOUNT_LOGOUT,
    callAPI: request('auth/logout'),
  };
};

export const getUser = (): Action => {
  return {
    name: types.ACCOUNT_USER_FETCH,
    callAPI: request('auth/user'),
  };
};
