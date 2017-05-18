/* @flow */

import {defineMessages} from 'react-intl';

export default defineMessages({
  username: {
    id: 'loginform.header.username',
    defaultMessage: 'Username',
    description: 'form header username',
  },
  password: {
    id: 'loginform.header.password',
    defaultMessage: 'Password',
    description: 'form header password',
  },
  alreadyLoggedIn: {
    id: 'loginform.text.alreadyLoggedIn',
    defaultMessage: 'You have been successfully logged in.',
    description: 'message telling user they have already logged in',
  },
  redirect: {
    id: 'loginform.text.redirect',
    defaultMessage: 'This page will redirect you in {seconds} seconds.',
    description: 'countdown letting user know when to they will be redirected',
  },
});
