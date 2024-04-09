import { createStore, combineReducers } from 'redux';
import notificationReducer from './reducer';

const store = createStore(
  combineReducers({
    notification: notificationReducer,
  }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

export default store;