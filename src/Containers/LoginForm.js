import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";
import { AccountActions } from "../Redux/Account/actions";
import LoginForm from "../Components/App/LoginForm";
import {
  auth,
  googleAuthProvider,
  facebookAuthProvider
} from "../Services/firebase";
import styled from "styled-components";

const LoginButton = styled.button`
  box-sizing: border-box;
  position: relative;
  margin: 0.2em;
  padding: 0 15px 0 46px;
  border: none;
  text-align: center;
  width: 100%;
  line-height: 34px;
  white-space: nowrap;
  border-radius: 0.2em;
  font-size: 16px;
  font-weight: 100;
  color: #fff;
  &:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 34px;
    height: 100%;
  }
  &:focus {
    outline: none;
  }
  &:active {
    box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);
  }
`;

const GoogleLoginButton = styled(LoginButton)`
  background: #dd4b39;
  &:before {
    border-right: #bb3f30 1px solid;
    background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png")
      6px 6px no-repeat;
  }
  &:focus {
    background: #e74b37;
  }
`;
const FacebookLoginButton = styled(LoginButton)`
  background-color: #4c69ba;
  background-image: linear-gradient(#4c69ba, #3b55a0);
  &:before {
    border-right: #364e92 1px solid;
    background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png")
      6px 6px no-repeat;
  }
  &:hover,
  &:focus {
    background-color: #5b7bd5;
    background-image: linear-gradient(#5b7bd5, #4864b1);
  }
`;

const VendorContainer = styled.div`
  text-align: center;
  margin-top: 20px;
  padding: 20px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
`;

class LoginFormContainer extends React.Component {
  componentDidMount() {
    const { onSubmitSuccess } = this;
    auth.onAuthStateChanged(user => {
      if (user) {
        onSubmitSuccess();
      }
    });
  }
  getRedirectFromLocation(location) {
    const params = new URLSearchParams(location.search);
    return params.get("redirect");
  }

  onSubmitSuccess = () => {
    const { getRedirectFromLocation } = this;
    const { location, history } = this.props;
    const redirect = getRedirectFromLocation(location);
    history.push(redirect || "/");
  };
  onSubmitFail = err => {
    console.log("err", err);
  };
  onSubmit = form => {
    auth
      .signInWithEmailAndPassword(form.username, form.password)
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("login err", error, errorCode, errorMessage);
      })
      .then(a => {
        console.log("auth success");
      });
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
        <VendorContainer>
          <GoogleLoginButton
            onClick={() => auth.signInWithPopup(googleAuthProvider)}
          >
            Login with Google
          </GoogleLoginButton>
          <FacebookLoginButton
            onClick={() => auth.signInWithPopup(facebookAuthProvider)}
          >
            Login with Facebook
          </FacebookLoginButton>
        </VendorContainer>
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
  connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)
);
