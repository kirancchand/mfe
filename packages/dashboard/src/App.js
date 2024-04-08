import React,{lazy} from "react";
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
// const HomeLazy = lazy(()=>import ('./components/Home'));
import Home from "./components/Home";
import { Provider } from 'react-redux';
import store from '../re-redux/store';
import { useSelector } from 'react-redux';
const generateClassName=createGenerateClassName({
    productionPrefix:'ha'   ,
});

export default()=>{
    return <div>
        <StylesProvider generateClassName={generateClassName}>
          <Provider store={store}>
            <Home/>
          </Provider>
        </StylesProvider>
    </div>
}