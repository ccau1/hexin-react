import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "react-router-redux";

export default (rootReducer, rootSaga, browserHistory) => {
  /* ------------- Redux Configuration ----------------- */

  const middleware = [];
  const enhancers = [];

  /* ------------- Router Middleware ------------------- */

  const routingMiddleware = routerMiddleware(browserHistory);
  middleware.push(routingMiddleware);

  /* ------------- Saga Middleware --------------------- */

  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  /* ------------- Assemble Middleware ----------------- */

  enhancers.push(applyMiddleware(...middleware));

  /* ------------- Create Composer --------------------- */

  const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        hostname: "remotedev.io"
      })
    : compose;

  /* ------------- Create the store -------------------- */

  const store = createStore(rootReducer, composer(...enhancers));

  // kick off root saga
  sagaMiddleware.run(rootSaga, store.dispatch);

  return store;
};
