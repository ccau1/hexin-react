/* @flow */
import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {
  TextField,
} from 'redux-form-material-ui';
import {
  Button,
} from 'app/components';
import {FormattedMessage} from 'react-intl';
import messages from './messages';

const validate = values => {
  const errors = {};



  return errors;
};

class ContactForm extends Component {
  static propTypes = {

  };

  render() {
    const {error, handleSubmit, pristine, reset, submitting} = this.props;
    return (
      <form onSubmit={handleSubmit}>
      {error && <strong>{error}</strong>}
        <div>
          <Field name="email" component={TextField} floatingLabelText={<FormattedMessage {...messages.email} />} />
        </div>
        <div>
          <Field name="name" component={TextField} floatingLabelText={<FormattedMessage {...messages.name} />} />
        </div>
        <div>
          <Field name="subject" component={TextField} floatingLabelText={<FormattedMessage {...messages.subject} />} />
        </div>
        <div>
          <Field name="body" component={TextField} floatingLabelText={<FormattedMessage {...messages.body} />} />
        </div>
        <br />
        <br />
        <Button.Primary type="submit" disabled={submitting} primary={true}>Send</Button.Primary>
        <Button.Link disabled={pristine || submitting} onClick={reset}>Clear</Button.Link>
      </form>
    );
  }
}

export default reduxForm({
  form: 'Contact',
  validate,
})(ContactForm);
