import createStore from "./store";
import rootSaga from "./sagas";
import rootReducer from "./reducers";

export const store = createStore(rootReducer, rootSaga);
