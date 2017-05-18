/* @flow */

/*
 * DOCUMENTATION
 *
 * This is the centralized area for defining flow type's types. The goal of this
 * is to empower methods and variables with strong-typed annotations, and as a result will
 * greatly reduce bugs and enhance IDE intellisense.

 * Current grouping:
 *    Forms
 *    Models
 *    Reducers
 *    Store States
 *    Actions
 */

// import * as ActionTypes from 'actions/types'; // TODO:: Should use this for Action type instead

/*
 *  START:: FORMS
 */

// FormState
export type Errors = {
  _error?: Array<String>,
  [errorName: String]: String,
};
// export type FormState = {
//   isValid: boolean,
//   errors: Array<FormStateError>,
//   isSubmitting: boolean,
//   isValidField: Function,
//   setValidity: Function,
//   isDirty: Function,
//   setDirty: Function,
//   setAllDirty: Function,
//   setError: Function,
//   setErrors: Function,
//   resetErrors: Function,
//   setSubmitting: Function
// };

// export type FormStateError = {
//   field: String,
//   message: String,
// };

// // Form base
// export type FormBase = {
//   item: Object,
//   status: Number,
//   state: FormState,
// }

// // FORMS
export type ContactForm = {
  name: string,
  email: string,
  subject: string,
  body: string,
  // contact: {
  //   address: {
  //     displayAddress: string,
  //     location: {
  //       lat: Number,
  //       lng: Number
  //     }
  //   },
  //   phoneNo: string,
  //   zoom: Number,
  //   openingHours: string
  // },
  // idx: Number
};

// export type ChargeType = {
//   _id: string,
//   code: string,
//   name: string
// };

export type SignUpForm = {
  _id: string,
  firstname: string,
  lastname: string,
  email: string,
  password: string,
  confirmpassword: string
};

export type LoginForm = {
  username: string,
  password: string
};

/*
 *  END:: FORMS
 */

/*
 *  START:: MODELS
 */

export type User = {

};

export type Todo = {
  _id?: string,
  name: string,
  timestamp: number,
  isComplete: bool,
};

/*
 *  END:: MODELS
 */

/*
 *  START:: REDUCERS
 */

export type IntlState = {
  currentLocale: ?string,
  defaultLocale: ?string,
  initialNow: ?number,
  locales: ?Array<string>,
  messages: ?Object,
};

export type AccountState = {
  user: User,
}

export type TodoState = {
  items: Array<Todo>,
}

/*
 *  END:: REDUCERS
 */

/*
 *  BEGIN:: STORE STATE
 */

export type State = {
  account: AccountState,
  intl: IntlState,
  todo: TodoState,
};

/*
 *  END:: STORE STATE
 */


/*
 *  START:: ACTIONS
 */
export type Action =
    {type: "INTL_LOCALE_SET", payload: {locale: string}}
  | {type: "INTL_SET", payload: IntlState}
  | {type: "ACCOUNT_LOGOUT"}
  | {type: "TODOS_FETCH_COMPLETE", payload: Array<Todo>}
  | {name: string, callAPI: Function, shouldCallAPI?: Function, payload?: Object}
  | Function
  ;

  /*
   *  END:: ACTIONS
   */
