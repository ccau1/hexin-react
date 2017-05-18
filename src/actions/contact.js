/* @flow */

import * as types from './types';
import type {Action, ContactForm} from 'src/types';
import request from 'lib/request';
import {stopSubmit as ThrowReduxFormError} from 'redux-form';

// contact form
// export const setContactFormItem = (contactForm: ContactForm): Action => {
//   return {
//     type: types.CONTACT_SET_FORM_ITEM,
//     payload: contactForm,
//   };
// };

// export const setContactFormState = (formState: FormState): Action => {
//   return {
//     type: types.CONTACT_SET_FORM_STATE,
//     payload: formState,
//   };
// };

export const sendContactUsForm = (contactForm: ContactForm): Action => {
  return {
    name: types.CONTACTUS_MAIL_SEND,
    callAPI: request('auth/token', {method: 'POST', data: contactForm}),
    onComplete: (accessToken, {dispatch, getState}) => {

    },
    onError: (errors, {dispatch, getState}) => {
      dispatch(ThrowReduxFormError('Login', errors));
    },
  };
};
