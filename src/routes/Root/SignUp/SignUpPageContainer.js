/* @flow */

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from 'actions';
import SignUpPage from './SignUpPage';

class SignUpPageContainer extends React.Component {
  constructor(props: Object): void {
    super(props);
  }

  render() {
    const {user, location} = this.props;
    const redirect = (new URLSearchParams(location.search)).get('redirect') || '/';
    return (
      <SignUpPage user={user} redirect={redirect} />
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPageContainer);
