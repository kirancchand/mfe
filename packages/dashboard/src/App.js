import React from "react";
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import Home from "./components/Home";

const generateClassName=createGenerateClassName({
    productionPrefix:'ha'   ,
});

export default()=>{
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Home/>
        </StylesProvider>
    </div>
}