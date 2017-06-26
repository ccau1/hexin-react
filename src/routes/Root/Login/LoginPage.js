/* @flow */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import LoginForm, {LoginFormSuccess} from 'containers/LoginForm';
import DocumentTitle from 'app/components/DocumentTitle';
import {
  Card,
  CardTitle,
  CardText
} from 'material-ui';
import {
  FormattedMessage
} from 'react-intl';
import {H3} from 'app/components';
import messages from './messages';

export default class LoginPage extends Component {
  static propTypes = {
    user: PropTypes.object
  };

  userInRequiredRoles(user: Object, requiredRoles: Array<string> = []): boolean {
    const curUserRoles = Array.isArray(user.roles) ? user.roles : user.roles.split('|');

    if (requiredRoles.indexOf('anon') > -1) {
      return true;
    } else if (!user) {
      return false;
    } else if (requiredRoles.indexOf('loggedIn') > -1) {
      return true;
    } else if (curUserRoles.some(userRole => requiredRoles.indexOf(userRole) > -1)) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const {user, redirect, requiredRoles} = this.props;

    if (user && this.userInRequiredRoles(user, requiredRoles)) {
      return (
        <DocumentTitle title="Login Success!">
          <LoginFormSuccess redirect={redirect || '/'} counter={4} />
        </DocumentTitle>
      );
    } else {
      return (
        <DocumentTitle title="Login">
          <div style={styles.container}>
            <div style={styles.loginContainer}>
              <Card>
                <CardTitle title={<FormattedMessage {...messages.title} />} subtitle={<FormattedMessage {...messages.subtitle} />} />
                <CardText>
                  {requiredRoles && requiredRoles.length > 0 && <H3>You do not have proper permission to access {redirect} page</H3>}
                  <LoginForm />
                </CardText>
              </Card>
            </div>
          </div>
        </DocumentTitle>
      );
    }
  }
}
