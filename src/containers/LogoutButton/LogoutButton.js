/* @flow */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'app/components';
import {FormattedMessage} from 'react-intl';
import messages from './messages';

export default class LogoutButton extends Component {
  static propTypes = {
    onLogout: PropTypes.func,
  };

  render() {
    const {onLogout} = this.props;
    return (
      <Button.Link onTouchTap={onLogout}><FormattedMessage {...messages.logout} /></Button.Link>
    );
  }
}
