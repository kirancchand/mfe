import React from "react";
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import Landing from './components/Landing';
import Pricing from './components/Pricing';
import { Provider } from 'react-redux';
import store from '../re-redux/store';
import TodoList from '../src/components/TodoList';
const generateClassName=createGenerateClassName({
    productionPrefix:'ma'   ,
});

export default({history})=>{
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Provider store={store}>
               <TodoList/>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/pricing" component={Pricing}/>
                        <Route path="/" component={Landing}/>
                    </Switch>
                </Router>
            </Provider>
        </StylesProvider>
    </div>
}