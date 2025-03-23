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
import UserAddress from "./pages/useraddress";
import UserAddressAdd from "./pages/useraddaddress";
import Checkout from "./pages/checkout";
import Invoice from "./pages/invoice";
import UserAccount from "./pages/useraccount";
import UserOrders from "./pages/userorder";
import Logout from "./pages/logout";
import GuardRoute from "./components/guardroute";
import GuestOnlyRoute from "./components/guardsonlyroute";

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
                      <GuestOnlyRoute path="/register" >
                          <Register/>
                      </GuestOnlyRoute>
                      <Route exact path="/" >
                            <Home/>
                      </Route>
                      <Route path="/success/register">
                          <RegisterSuccess/>
                      </Route>
                      <Route path="/login" >
                          <Login/>
                      </Route>
                      <GuardRoute path="/alamat-pengiriman/tambah" >
                          <UserAddressAdd/>
                      </GuardRoute>
                      <GuardRoute path="/alamat-pengiriman">
                          <UserAddress/>
                      </GuardRoute>
                      <GuardRoute path="/checkout">
                          <Checkout/>
                      </GuardRoute>
                      <GuardRoute path="/invoice/:order_id">
                            <Invoice/>
                      </GuardRoute>
                      <GuardRoute path="/account">
                          <UserAccount/>
                      </GuardRoute>
                      <GuardRoute path="/pesanan">
                          <UserOrders/>
                      </GuardRoute>
                      <GuardRoute path="/logout">
                          <Logout/>
                      </GuardRoute>

                  </Switch>
              </Router>
          </Provider>
      </div>
  );
}

export default App;