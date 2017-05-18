// @flow
import {defineMessages} from 'react-intl';

export default defineMessages({
  firstName: {
    id: 'signup.input.firstname',
    defaultMessage: 'First Name',
    description: 'heading for input text first name',
  },
  lastName: {
    id: 'signup.input.lastname',
    defaultMessage: 'Last Name',
    description: 'heading for input text last name',
  },
  email: {
    id: 'signup.input.email',
    defaultMessage: 'E-mail',
    description: 'heading for input text email',
  },
  'email.invalid': {
    id: 'signup.validation.invalidEmail',
    defaultMessage: 'This E-mail is invalid',
    description: 'Validation message for invalid email format',
  },
  password: {
    id: 'signup.input.password',
    defaultMessage: 'Password',
    description: 'heading for input text password',
  },
  'password.withinLength': {
    id: 'signup.validation.withinLength',
    defaultMessage: 'Password should consist of {min}-{max} characters.',
    description: 'Validation message of limited length field',
  },
  confirmPassword: {
    id: 'signup.input.confirmpassword',
    defaultMessage: 'Confirm Password',
    description: 'heading for input text confirm password',
  },
  'confirmPassword.match': {
    id: 'signup.validation.matchConfirmPassword',
    defaultMessage: 'Confirm Password should match with Password',
    description: 'Validation message for the case when password and confirm password are different',
  },
  required: {
    id: 'input.required',
    defaultMessage: 'This field cannot be empty!',
    description: 'Input Textbox\'s required message',
  },
  signUpSuccess: {
    id: 'signup.success.message',
    defaultMessage: 'Congratulations! You have successfully registered',
    description: 'Success message for new member is registered',
  },
  redirect: {
    id: 'signupform.text.redirect',
    defaultMessage: 'This page will redirect you to login page in {seconds} seconds.',
    description: 'countdown letting user know when to they will be redirected',
  },
});
