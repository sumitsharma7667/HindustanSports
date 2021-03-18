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
import { MyContextprovider } from "./Context"
import ProductForm from "./Productform"
ReactDOM.render(
  <BrowserRouter >
      <Switch>
        <MyContextprovider>
        <Route path="/Home" component={Home} />
        <Route path="/Singleproduct"component={Singleproduct}/>
        <Route path="/about" component={about} />
         <Route path="/ProductForm" component={ProductForm} />
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
