import React from "react";
import { reduxForm } from "redux-form";
import Button from "../Button";
import Checkbox from "../Form/Checkbox";
import TextInput from "../Form/TextInput";
import Form from "../Form/Form";
import Errors from "../Form/Errors";
import { FormattedMessage } from "react-intl";
import FormName from "../../Constants/Form";

const validate = values => {
  const errors = {};

  if (!values.username) {
    errors.username = <FormattedMessage id={"error.required"} />;
  }
  if (!values.password) {
    errors.password = <FormattedMessage id={"error.required"} />;
  }
  if (!values.otherthings) {
    errors.otherthings = <FormattedMessage id={"error.required"} />;
  }
  return errors;
};

const LoginForm = ({
  onSubmit,
  form,
  onSubmitSuccess,
  onSubmitFail = () => true
}) => {
  return (
    <Form
      onSubmit={onSubmit}
      onSubmitSuccess={onSubmitSuccess}
      onSubmitFail={onSubmitFail}
    >
      <Errors />
      <TextInput name="username" label="Username" />
      <TextInput name="password" label="Password" type="password" />
      <Checkbox name="rememberMe" label="remember me" />
      <Button.Primary type="submit">Sign In</Button.Primary>
    </Form>
  );
};

export default reduxForm({
  form: FormName.LOGIN,
  validate,
  initialValues: {
    rememberMe: true
  }
})(LoginForm);
