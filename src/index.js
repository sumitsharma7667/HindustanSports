import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./Home"
import Singleproduct from './Singleproduct';
import LoginPage from "./container/LoginPage"
import about from './About'
import {MyContextprovider} from "./Context"
import AdminLayout from "./AdminLayout"
import Productform from "./Productform"
import Dashboard from "./Dashboard"
import Addcategory from "./Addcategory"
import Addbrand from "./Addbrand"
import Cart from "./Cart"
import Addcart from "./AddCart"
import Profile from "./Profile"
import SignupPage from "./container/Signup/Signup"
import Checkout from "./Checkout"
import Productlist from "./productlist"
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
        <AppRoute path ="/Addcategory" layout={AdminLayout} component={Addcategory} />
        <AppRoute path="/Dashboard" layout={AdminLayout} component={Dashboard} />
        <AppRoute path="/addbrand" layout={AdminLayout} component={Addbrand} />  

                            
        <Route path="/Home" component={Home} />    
        <Route path="/about" component={about} />
        {/* <Route path="/Singleproduct/:id" component={Cart} /> */}
        <Route path="/Singleproduct/:id" component={Singleproduct} />
        <Route path="/Addcart" component={Addcart} />
        <Route path="/Profile" component={Profile}/>
        <Route path="/login" component={LoginPage} />
        <Route path="/Signup" component={SignupPage}/>
        <Route exact path="/checkout" component={Checkout}/>
        <Route exact path="/productlist" component={Productlist}/>
        <Route exact path="/" component={Home}/>
        </MyContextprovider>      
      </Switch>        
  </BrowserRouter>,
document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
