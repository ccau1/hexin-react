/* @flow */
import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from 'reducers';
import injectTapEventPlugin from 'react-tap-event-plugin';
import callAPIMiddleware from 'lib/callAPIMiddleware';
import Intl from 'app/Intl';
import Router from 'app/Router';
import Theme from 'app/Theme';
import DocumentTitle from 'app/components/DocumentTitle';
import {setRequestConnection} from 'lib/request';
// import initializer from 'app/initializer';
import {bindActionCreators} from 'redux';
import {ActionCreators} from 'actions';
import * as request from 'lib/request';


injectTapEventPlugin();

/* Store & Middleware */
const loggerMiddleware = createLogger({predicate: (getState, action) => true});//process.env.NODE_ENV === 'development'});

const configureStore = (initialState: Object) => {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      callAPIMiddleware,
      loggerMiddleware,
    )
  );
  return createStore(reducer, initialState, enhancer);
};

export const store = configureStore({});

export const preInit = () => {
  // console.log('App::pre init');
  return new Promise((resolve, reject) => {
    setRequestConnection('main', 'http://localhost:8280/api/', {
      log: false,
      headers: {
        'accept-language': 'en', // TODO:: get this from store. default language
      },
    });
    const actions = bindActionCreators(ActionCreators, store.dispatch);
    if (request.getAccessToken('main') && !request.hasTokenExpired('main')) {
      actions.getUser()
      .then(result => {
        resolve();
      });
    } else {
      resolve();
    }
  });
};

export const init = () => {
  // console.log('App::init');
};

export const postInit = () => {
  // console.log('App::post init');
  hideLoader();
};

const hideLoader = () => {
  const loader = document.getElementById('loader');
  if (typeof loader !== 'undefined' && loader !== null) {
    loader.classList.add('hide');
    // TODO:: line below throws flow error, but need it to remove loader ele
    // setTimeout(() => loader.parentNode.removeChild(loader), 1400);
  }
};

export default () => (
  <Provider store={store}>
      <DocumentTitle title="App" suffix="WTTWE">
        <Theme>
          <Intl>
            <Router />
          </Intl>
        </Theme>
      </DocumentTitle>
  </Provider>
);
