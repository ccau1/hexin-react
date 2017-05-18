/* @flow */

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from 'actions';
import {reset as ReduxFormReset} from 'redux-form';
import ContactForm from './ContactForm';

class ContactFormContainer extends React.Component {
  constructor(props: Object): void {
    super(props);
  }

  componentDidMount(): void {
    this.props.Actions.resetForm('Contact');
  }

  onSubmit(form) {
    this.props.Actions.sendContactUsForm(form);
  }

  render() {
    return (
      <ContactForm onSubmit={this.onSubmit.bind(this)} />
    );
  }
}

function mapStateToProps(state: Object): {MyProp: Object} {
  return {
    MyProp: state.MyProp,
  };
}

function mapDispatchToProps(dispatch: Function): {Actions: Object} {
  return {Actions: bindActionCreators({...ActionCreators, resetForm: ReduxFormReset}, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactFormContainer);
