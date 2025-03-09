import React from 'react';
import './App.css';
import  Home from  './pages/home';
import RegisterSuccess from './pages/registersuccess';
import Login from './pages/login';
import 'upkit/dist/style.min.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './app/store';
import { listen } from './app/listener';
import Register from './pages/register';
import {getCart} from "./api/cart";


function App() {
    React.useEffect(() => {
        listen();
        getCart();
    },[])

    return (
      <div>
          <Provider store={store} >
              <Router>
                  <Switch>
                      <Route path="/register" >
                          <Register/>
                      </Route>
                      <Route exact path="/" >
                            <Home/>
                      </Route>
                      <Route path="/success/register">
                          <RegisterSuccess/>
                      </Route>
                      <Route path="/login" >
                          <Login/>
                      </Route>
                  </Switch>
              </Router>
          </Provider>
      </div>
  );
}

export default App;