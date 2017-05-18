/* @flow */
import App, {store as appStore, preInit as preAppInit, postInit as postAppInit, init as appInit} from './App';

export let store = appStore;
export const preInit = preAppInit;
export const init = appInit;
export const postInit = postAppInit;
export default App;
