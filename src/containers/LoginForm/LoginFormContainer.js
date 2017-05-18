import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from 'actions';
import {ACCOUNT_LOGIN, ActionStates} from 'actions/types';
import {withRouter} from 'react-router-dom';
// import {FORM_STATUS} from 'lib/FormState';
// import styles from './styles';
import {reset as ReduxFormReset, SubmissionError} from 'redux-form';
import LoginForm from './LoginForm';

class LoginFormContainer extends React.Component {
  static propTypes = {
    urlRedirect: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount(): void {
    if (this.props.user) {
      // user already logged in, get OUT OF HEREE
    } else {
      this.props.Actions.resetForm('Login');
    }
  }

  onSubmit(loginForm) {
    const {Actions} = this.props;
    return Actions.login(loginForm).then((dispatch) => {
      if (dispatch.type === ACCOUNT_LOGIN + ActionStates.COMPLETE) {
        Actions.getUser();
      } else {
        throw new SubmissionError(dispatch.payload);
      }
    });
  }

  render() {
    const {history} = this.props;

    return (
      <LoginForm onSubmit={this.onSubmit.bind(this)} onRegisterClick={() => history.push('/signup')} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer));
