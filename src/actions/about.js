import request from 'lib/request';
// import * as types from './types';
import * as actionTypes from 'actions/types';
// import callAPIMiddleware from 'lib/callAPIMiddleware';
//
// import { Field, reduxForm } from 'redux-form';

export const getAbout = () => {
  return {
    type: actionTypes.ABOUT_FETCH,
    name: actionTypes.ABOUT_FETCH,
    callAPI: request('/pages/web/about'),
  };
};

// export const getAbout = (): Action => {
//   return (dispatch: Function) => {
//     dispatch({type: actionTypes.ABOUT_FETCH + types.ActionStates.REQUEST});
//     request('/pages/web/about', {method: 'GET'})
//       .then(data => {
//         dispatch({
//           type: actionTypes.ABOUT_FETCH + types.ActionStates.COMPLETE,
//           payload: data
//         });
//       })
//       .catch(err => {
//         dispatch({
//           type: actionTypes.ABOUT_FETCH + types.ActionStates.FAIL,
//           payload: err,
//         });
//       });
//   };
// };
