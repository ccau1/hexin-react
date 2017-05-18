/* @flow */

import React from 'react';
import {NavLink} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import PropTypes from 'prop-types';
import LogoutButton from 'containers/LogoutButton';
import messages from './messages';
import {FormattedMessage} from 'react-intl';
import styles from './styles';

export default class LoggedInMenu extends React.Component {
  static propTypes = {
    user: PropTypes.object,
  };

  constructor(props: Object): void {
    super(props);
  }

  render() {
    const {user} = this.props;
    return (
      <div>
        <Toolbar style={styles.toolbar}>
          <ToolbarGroup firstChild={true}>
            <NavLink to={'/'} exact activeStyle={styles.navLinkSelected}><FlatButton><FormattedMessage {...messages.home} /></FlatButton></NavLink>
            <NavLink to={'/contact'} activeStyle={styles.navLinkSelected}><FlatButton><FormattedMessage {...messages.contactUs} /></FlatButton></NavLink>
            <NavLink to={'/todos'} activeStyle={styles.navLinkSelected}><FlatButton><FormattedMessage {...messages.todos} /></FlatButton></NavLink>
            <NavLink to={'/secret-stuff'} activeStyle={styles.navLinkSelected}><FlatButton><FormattedMessage {...messages.secretStuff} /></FlatButton></NavLink>
          </ToolbarGroup>
          <ToolbarGroup>
            <NavLink to={'/profile'}><FlatButton><FormattedMessage {...messages.welcomeBack} values={{username: user.firstName + ' ' + user.lastName}} /></FlatButton></NavLink>
            <LogoutButton redirect={'/'} />
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}
