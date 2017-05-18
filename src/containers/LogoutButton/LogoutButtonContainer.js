/* @flow */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from 'actions';
import LogoutButton from './LogoutButton';
import {withRouter} from 'react-router-dom';

class LogoutButtonContainer extends React.Component {
  static propTypes = {
    onLogout: PropTypes.func,
  };

  constructor(props: Object): void {
    super(props);
  }

  onLogout() {
    this.props.Actions.logout();
    if (this.props.onLogout) {
      this.props.onLogout();
    }
    this.redirect();
  }

  redirect() {
    const {history, redirect} = this.props;
    history.push(redirect);
  }

  render() {
    const {onLogout} = this;
    return (
      <LogoutButton onLogout={onLogout.bind(this)} />
    );
  }
}

function mapStateToProps(state: Object): {user: Object} {
  return {
    user: state.account.user,
  };
}

function mapDispatchToProps(dispatch: Function): {Actions: Object} {
  return {Actions: bindActionCreators(ActionCreators, dispatch)};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogoutButtonContainer));
