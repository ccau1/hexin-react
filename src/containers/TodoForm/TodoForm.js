/* @flow */
import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {
  TextField
} from 'redux-form-material-ui';
import {Button} from 'app/components';
import {FormattedMessage} from 'react-intl';
import messages from './messages';

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'This is required';
  }

  return errors;
};

class TodoForm extends Component {
  static propTypes = {

  };

  render() {
    const {error, handleSubmit, pristine, reset, submitting} = this.props;
    return (
      <form onSubmit={handleSubmit}>
      {error && <strong>{error}</strong>}
        <div>
          <Field name="name" component={TextField} floatingLabelText={<FormattedMessage {...messages.name} />} />
        </div>

        <br />
        <br />
        <Button.Primary type="submit" disabled={submitting} primary={true}><FormattedMessage {...messages.formBtnAdd} /></Button.Primary>
        <Button.Link disabled={pristine || submitting} onClick={reset}><FormattedMessage {...messages.formBtnClear} /></Button.Link>
      </form>
    );
  }
}

export default reduxForm({
  form: 'Todo',
  validate
})(TodoForm);
