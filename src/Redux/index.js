import createHistory from 'history/createBrowserHistory';
import createStore from './store';
import rootSaga from './sagas';
import rootReducer from './reducers';

export const browserHistory = createHistory();

export const store = createStore(rootReducer, rootSaga, browserHistory);
