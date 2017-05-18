/* @flow */

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from 'actions';
import LoginPage from './LoginPage';

class LoginPageContainer extends React.Component {
  constructor(props: Object): void {
    super(props);
  }

  render() {
    const {user, location} = this.props;
    const redirect = (new URLSearchParams(location.search)).get('redirect') || '/';
    return (
      <LoginPage user={user} redirect={redirect} requiredRoles={location.state ? location.state.requiredRoles : []} />
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);
