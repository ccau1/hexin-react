import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { AccountActions } from '../Redux/Account/actions';
import LoginForm from '../Components/LoginForm';

class LoginFormContainer extends React.Component {
  getRedirectFromLocation(location) {
    const params = new URLSearchParams(location.search);
    return params.get('redirect');
  }

  onSubmitSuccess = () => {
    const { getRedirectFromLocation } = this;
    const { location, history } = this.props;
    const redirect = getRedirectFromLocation(location);
    history.push(redirect || '/');
  };
  onSubmitFail = err => {
    console.log('err', err);
  };
  onSubmit = form => {
    const { onLogin } = this.props;
    onLogin(form.username, form.password, form.rememberMe);
  };
  render() {
    const { onSubmitSuccess, onSubmitFail, onSubmit } = this;

    return (
      <div>
        <LoginForm
          onSubmit={onSubmit}
          onSubmitSuccess={onSubmitSuccess}
          onSubmitFail={onSubmitFail}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  formSucceed: state.form.login && state.form.login.submitSucceeded
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ onLogin: AccountActions.login }, dispatch);
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginFormContainer)
);
