/* @flow */
// import {Map} from 'immutable';
import createReducer from 'lib/createReducer';
// import * as types from 'actions/types';

// define contact object
// const contactFormBase = {
//   item: {
//     name: '',
//     contact: {
//       address: {
//         displayAddress: '',
//         location: {
//           lat: 0,
//           lng: 0,
//         },
//       },
//       phoneNo: '',
//       zoom: 0,
//       openingHours: '',
//     },
//     idx: 0,
//   },
//   state: new FormState(),
//   status: FORM_STATUS.OK,
// };

const initialState = {
  user: null,
  // contactForm: {...contactFormBase},
};

export const contact = createReducer(initialState, {
  // [types.CONTACT_SET_FORM_ITEM]: (state, action) => {
  //   return {...state, contactForm: {...state.contactForm, item: action.payload}};
  // },
  // [types.CONTACT_SET_FORM_STATE]: (state, action) => {
  //   return {...state, contactForm: {...state.contactForm, state: action.payload}};
  // },
});
