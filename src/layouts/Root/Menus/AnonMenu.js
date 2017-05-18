/* @flow */
import React from 'react';
import {NavLink} from 'react-router-dom';
import {Button} from 'app/components';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import messages from './messages';
import {FormattedMessage} from 'react-intl';
import styles from './styles';

export default class AnonMenu extends React.Component {
  static propTypes = {

  };

  constructor(props: Object): void {
    super(props);
  }

  render() {
    return (
      <div>
        <Toolbar style={styles.toolbar}>
          <ToolbarGroup firstChild={true}>
            <NavLink to={'/'} exact activeStyle={styles.navLinkSelected}><Button.Link><FormattedMessage {...messages.home} /></Button.Link></NavLink>
            <NavLink to={'/contact'} activeStyle={styles.navLinkSelected}><Button.Link><FormattedMessage {...messages.contactUs} /></Button.Link></NavLink>
            <NavLink to={'/todos'} activeStyle={styles.navLinkSelected}><Button.Link><FormattedMessage {...messages.todos} /></Button.Link></NavLink>
            <NavLink to={'/secret-stuff'} activeStyle={styles.navLinkSelected}><Button.Link><FormattedMessage {...messages.secretStuff} /></Button.Link></NavLink>
          </ToolbarGroup>
          <ToolbarGroup>
            <NavLink to={'/login'} activeStyle={styles.navLinkSelected}><Button.Link><FormattedMessage {...messages.login} /></Button.Link></NavLink>
            <NavLink to={'/signup'} activeStyle={styles.navLinkSelected}><Button.Link><FormattedMessage {...messages.signUp} /></Button.Link></NavLink>
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}
