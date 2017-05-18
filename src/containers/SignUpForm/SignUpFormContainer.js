/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import {ActionCreators} from 'actions';
import {withRouter} from 'react-router-dom';
import {reset as ReduxFormReset, SubmissionError} from 'redux-form';
import {ACCOUNT_SIGNUP, ActionStates} from 'actions/types';
import SignUpForm from './SignUpForm';

class SignUpFormContainer extends React.Component {
  static propTypes = {
    urlRedirect: PropTypes.string,
  };

  constructor(props: Object): void {
    super(props);
  }

  componentDidMount(): void {
    if (this.props.user && this.props.user._id) {
      browserHistory.push('/');
    }
    this.props.Actions.resetForm('SignUp');
  }

  onSubmit(signup) {
    const {Actions} = this.props;
    return Actions.signUp(signup).then((dispatch) => {
      if (dispatch.type === ACCOUNT_SIGNUP + ActionStates.COMPLETE) {
        Actions.login({username: signup.email, password: signup.password}).then(() => {
          Actions.getUser();
        });
      } else {
        throw new SubmissionError(dispatch.payload);
      }
    });
  }

  render() {
    const {history} = this.props;
    return (
      <SignUpForm onSubmit={this.onSubmit.bind(this)} onSignInClick={() => history.push('/login')} />
    );
  }
}

function mapStateToProps(state: Object): {user: Object} {
  return {
    user: state.account.user,
  };
}
function mapDispatchToProps(dispatch: Function): {Actions: Object} {
  return {Actions: bindActionCreators({...ActionCreators, resetForm: ReduxFormReset}, dispatch)};
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUpFormContainer));
