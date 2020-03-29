import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

//  import Routing1 from './component/Routing1';
import RoutingSide from './component/Sidebar/RoutingSide';
import Dashboard from './component/Sidebar/Dashboard';
import Login from './component/Login/login';
import SampleSideBar from './component/NestedRoutes/SampleSideBar';
import { routes, homeRoute, login } from './component/RouteName'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">

          <Switch>


            <Route exact path="/" component={Login} />
            <Route path="/dashboard" component={Dashboard} />


            {/* {homeRoute.map((r, i) => (

              <Route
                path={r.path}
              >
                <Dashboard />
              </Route>

            ))} */}
            {/* {
              homeRoute.map((route, i) => {
                if (route.path === "/") {
                  return <Route
                    key={i}
                    path={route.path}
                    component={route.component}
                  />

                } else {
                  return <Route
                    key={i}
                    path={route.path}
                    component={route.component}
                  />

                }
              })
            } */}




          </Switch>


        </div>
      </Router>



    );
  }

}

export default App;
