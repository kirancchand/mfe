import React , {lazy,Suspense,useState, useEffect} from "react";
import { BrowserRouter,Route,Switch,Router,Redirect } from "react-router-dom";
import {
    StylesProvider,
    createGenerateClassName,
  } from '@material-ui/core/styles';
// import MarketingApp from './components/MarketingApp';
// import AuthApp from "./components/AuthApp";
import Progress from "./components/Progress";
import Header from './components/Header';
import {createBrowserHistory} from 'history';
import { Provider } from 'react-redux';
import store from '../re-redux/store';
import TodoList from '../src/components/TodoList';
const MarketingLazy = lazy(()=>import ('./components/MarketingApp'));
const AuthLazy = lazy(()=>import ('./components/AuthApp'));
const DashboardLazy = lazy(()=>import ('./components/DashboardApp'));
const generateClassName=createGenerateClassName({
    productionPrefix:'co'   ,
});

const history=createBrowserHistory();
export default()=>{

    const [isSignedIn,setIsSignedIn]=useState(false);
    useEffect(()=>{
        if(isSignedIn){
            history.push('/dashboard');
        }else{
            history.push('/');
        }
    },[isSignedIn])
    return (
    // <BrowserRouter>
    <Router history={history}>
        <StylesProvider generateClassName={generateClassName}>
              <Provider store={store}>
            <div>
                <Header onSignOut ={()=>setIsSignedIn(false)} isSignedIn={isSignedIn}/>
                <Suspense fallback={<Progress/>}>
                    <Switch>
                        <Route path="/auth"><AuthLazy onSignIn={()=>setIsSignedIn(true)}/></Route>
                        <Route path="/dashboard">
                            {!isSignedIn&&<Redirect to="/" />}
                            <DashboardLazy/>
                            {/* <MarketingLazy/> */}
                        </Route>
                        <Route path="/"><MarketingLazy/></Route>
                    </Switch>
                </Suspense>
                {/* <Provider store={store}> */}
                {/* <ReduxApp/> */}
                {/* </Provider> */}
                {/* <MarketingApp/>  */}

                <TodoList/>
            </div>
             </Provider>
        </StylesProvider>
    </Router>
    //  </BrowserRouter>
     );
}