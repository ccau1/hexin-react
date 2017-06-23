/* @flow */

import * as IntlActions from './intl';
import * as AccountActions from './account';
import * as ContactActions from './contact';
import * as TodoActions from './todo';

export const ActionCreators = Object.assign({},
  IntlActions,
  AccountActions,
  ContactActions,
  TodoActions,
);
