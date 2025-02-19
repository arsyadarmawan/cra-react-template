
import './App.css';
import  Home from  './pages/home';
import 'upkit/dist/style.min.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './app/store';

function App() {
  return (
      <div>
          <Provider store={store} >
              <Router>
                  <Switch>
                      <Route path="/" component={Home}/>
                  </Switch>
              </Router>
          </Provider>
      </div>
  );
}

export default App;