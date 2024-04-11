import { createStore } from 'redux';
import { wrapStore } from 'redux-micro-frontend';
import rootReducer from './reducer';

const store = createStore(rootReducer);
wrapStore(store, { dispatchType: 'ACTION' });

export default store;
