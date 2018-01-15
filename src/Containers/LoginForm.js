import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";
import TextInput from "../Components/TextInput";
import Button from "../Components/Button";
import Error from "../Components/Error";
import { FormActions } from "../Redux/Forms/actions";
import { AccountActions } from "../Redux/Account/actions";

class LoginFormContainer extends React.Component {
  updateForm(field, val) {
    const { form, setForm } = this.props;
    setForm({ ...form, [field]: val });
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.currentUser) {
    //   const { history } = this.props;
    //   history.push("/");
    // }
  }

  getRedirectFromLocation(location) {
    const params = new URLSearchParams(location.search);
    return params.get("redirect");
  }
  render() {
    const { updateForm, getRedirectFromLocation } = this;
    const { onLogin, form, errors, location } = this.props;
    const { username, password } = form;

    const redirect = getRedirectFromLocation(location);

    return (
      <div>
        <Error name="_error" errors={errors} />
        <TextInput
          placeholder={"Username"}
          value={username}
          onChange={updateForm.bind(this, "username")}
        />
        <Error name="username" errors={errors} />
        <TextInput
          placeholder={"Password"}
          type="password"
          value={password}
          onChange={updateForm.bind(this, "password")}
        />
        <Error name="password" errors={errors} />
        <Button.Primary
          onClick={onLogin.bind(this, username, password, redirect)}
        >
          Sign In
        </Button.Primary>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.account.user,
  form: state.forms.login,
  errors: state.error.login,
  loading: state.loading.login
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { setForm: FormActions.setLoginForm, onLogin: AccountActions.login },
    dispatch
  );
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)
);
