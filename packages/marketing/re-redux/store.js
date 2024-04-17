import { legacy_createStore as createStore,combineReducers } from 'redux';
import TodoReducer from './todoReducer';

// import CounterReducer from './counterReducer';

// const store = createStore(CounterReducer);
const store = createStore(TodoReducer
    ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    // const store = createStore(
    //   combineReducers({
    //     todo: TodoReducer,
    //     counter: CounterReducer,
    //   }),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
    
    // );

export default store;