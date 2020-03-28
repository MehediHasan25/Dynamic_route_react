import React from 'react';
import './App.css';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import Home from './component/Home';
//  import Routing1 from './component/Routing1';
import RoutingSide from './component/Sidebar/RoutingSide';
import Dashboard from './component/Sidebar/Dashboard';
import Login from './component/Login/login';
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        
      </Switch>


    </div>
  </Router>

  );
}

export default App;
