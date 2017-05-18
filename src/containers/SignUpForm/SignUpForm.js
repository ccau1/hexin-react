/* @flow */
import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {
  TextField,
} from 'redux-form-material-ui';
import {Button} from 'app/components';
import {FormattedMessage} from 'react-intl';
import messages from './messages';

const validate = values => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = <FormattedMessage {...messages.required} />;
  }
  if (!values.lastName) {
    errors.lastName = <FormattedMessage {...messages.required} />;
  }
  if (!values.email) {
    errors.email = <FormattedMessage {...messages.required} />;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = <FormattedMessage {...messages['email.invalid']} />;
  }
  if (!values.password) {
    errors.password = <FormattedMessage {...messages.required} />;
  } else if (values.password.length < 6 || values.password.length > 10) {
    errors.password = <FormattedMessage {...messages['password.withinLength']} values={{min: 6, max: 10}} />;
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = <FormattedMessage {...messages.required} />;
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = <FormattedMessage {...messages['confirmPassword.match']} />;
  }

  return errors;
};

class SignUpForm extends Component {
  static propTypes = {

  };

  render() {
    const {error, handleSubmit, pristine, reset, submitting, onSignInClick} = this.props;
    return (
      <form onSubmit={handleSubmit}>
      {error && <strong>{error}</strong>}
        <div>
          <Field name="firstName" component={TextField} floatingLabelText={<FormattedMessage {...messages.firstName} />} />
        </div>
        <div>
          <Field name="lastName" component={TextField} floatingLabelText={<FormattedMessage {...messages.lastName} />} />
        </div>
        <div>
          <Field name="email" component={TextField} floatingLabelText={<FormattedMessage {...messages.email} />} />
        </div>
        <div>
          <Field name="password" type="password" component={TextField} floatingLabelText={<FormattedMessage {...messages.password} />} />
        </div>
        <div>
          <Field name="confirmPassword" type="password" component={TextField} floatingLabelText={<FormattedMessage {...messages.confirmPassword} />} />
        </div>
        <br />
        <br />
        <Button.Primary type="submit" disabled={submitting} primary={true}>Sign Up</Button.Primary>
        <Button.Link disabled={pristine || submitting} onClick={reset}>Clear</Button.Link>
        <br />
        <br />
        {onSignInClick && <p>Already a user? <Button.Link onClick={onSignInClick}>Login</Button.Link></p>}
      </form>
    );
  }
}

export default reduxForm({
  form: 'SignUp',
  validate,
})(SignUpForm);
