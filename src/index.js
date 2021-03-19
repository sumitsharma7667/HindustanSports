import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./Home"
import Singleproduct from './Singleproduct';
import about from './About'
import {MyContextprovider} from "./Context"
import AdminLayout from "./AdminLayout"
import Productform from "./Productform"
import Dashboard from "./Dashboard"
const AppRoute = ({component:Component,layout:Layout, ...rest})=>(
  <Route {...rest} render ={props=>(
    <Layout><Component {...props}> </Component></Layout>
  )}></Route>
  )
ReactDOM.render(
  <BrowserRouter >
      <Switch>
        <MyContextprovider>
        <AppRoute path ="/productform" layout={AdminLayout} component={Productform} />
        <AppRoute path ="/dashboard" layout={AdminLayout} component={Dashboard} />
        <Route path="/Home" component={Home} />
        <Route path="/Singleproduct"component={Singleproduct}/>
        <Route path="/about" component={about} />        
        </MyContextprovider>
        <Route path="/">
        <Home/>
        </Route>
      </Switch>        
  </BrowserRouter>,
document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
