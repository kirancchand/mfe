import React,{lazy,useState} from "react";
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
// const HomeLazy = lazy(()=>import ('./components/Home'));
import Home from "./components/Home";
import Counter from "./components/counter";
import { Provider } from 'react-redux';
// import store from '../re-redux/store';
import { useSelector } from 'react-redux';
import { GlobalStore } from 'redux-micro-frontend';
import { CounterReducer } from '../re-redux/counterReducer'
import { IncrementLocalCounter, DecrementLocalCounter } from '../re-redux/local.actions'
import { IncrementGlobalCounter, DecrementGlobalCounter } from '../re-redux/global.actions';
const generateClassName=createGenerateClassName({
    productionPrefix:'ha'   ,
});

export default()=>{

  const [mystate,setMyState]=useState({
    local: 0,
    global: 0,
    todo: 0
  })


  const globalStore = GlobalStore.Get(false);

  const store = globalStore.CreateStore("CounterApp", CounterReducer, []);
  globalStore.RegisterStore('CounterApp', store, [GlobalStore.AllowAll]);
  globalStore.RegisterGlobalActions("CounterApp", ["INCREMENT_GLOBAL", "DECREMENT_GLOBAL", "ADD_TODO", "REMOVE_TODO"]);
  globalStore.SubscribeToGlobalState("CounterApp", updateState)

const incrementLocalCounter=()=>{
  globalStore.DispatchAction("CounterApp", IncrementLocalCounter());
}

const decrementLocalCounter=()=>{
  globalStore.DispatchAction("CounterApp", DecrementLocalCounter());
}

const incrementGlobalCounter=()=>{
  globalStore.DispatchAction("CounterApp", IncrementGlobalCounter());
}

const decrementGlobalCounter=()=>{
    globalStore.DispatchAction("CounterApp", DecrementGlobalCounter());
}

const updateState=(globalState)=>{
  setMyState({
      local: globalState.CounterApp.local,
      global: globalState.CounterApp.global,
      todo: globalState.CounterApp.todo
  });
}


    return <div>
        <StylesProvider generateClassName={generateClassName}>
          {/* <Provider store={store}> */}
            {/* <Home/> */}
            <Counter count={mystate.global} header="Global Counter" increment={incrementGlobalCounter} decrement={decrementGlobalCounter}></Counter>
            <Counter count={mystate.local} header="Local Counter" increment={incrementLocalCounter} decrement={decrementLocalCounter}></Counter>
          {/* </Provider> */}
        </StylesProvider>
    </div>
}