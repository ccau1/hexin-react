/* @flow */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {reduxForm, Field} from 'redux-form';
import {
  TextField,
} from 'redux-form-material-ui';
import {Button} from 'app/components';
import {FormattedMessage} from 'react-intl';
import messages from './messages';

const validate = values => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) {
    errors.username = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  }

  return errors;
};

class LoginForm extends Component {
  static propTypes = {
    onRegisterClick: PropTypes.func,
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    const {error, handleSubmit, pristine, reset, submitting, onRegisterClick} = this.props;
    return (
      <form onSubmit={handleSubmit}>
      {error && <strong>{error}</strong>}
        <div>
          <Field name="username" component={TextField} floatingLabelText={<FormattedMessage {...messages.username} />} />
        </div>
        <div>
          <Field name="password" type="password" component={TextField} floatingLabelText={<FormattedMessage {...messages.password} />} />
        </div>
        <br />
        <br />
        <Button.Primary type="submit" disabled={submitting} primary={true}>Login</Button.Primary>
        <Button.Link disabled={pristine || submitting} onClick={reset}>Clear</Button.Link>
        <br />
        <br />
        {onRegisterClick && <p>Don't have an account? <Button.Link onClick={onRegisterClick}>Register</Button.Link></p>}
      </form>
    );
  }
}

export default reduxForm({
  form: 'Login',
  validate,
})(LoginForm);
