import React from 'react';
import RoutingSide from './RoutingSide';

import Sidebar from '../Sidebar/Sidebar';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import { routes } from '../RouteName';
import Home from '../Home';





function Dashboard() {
    console.log("In the Dashboard")

    let { path, url } = useRouteMatch();
    return (
        <Router>
            <div >
                <Nav />
                <div className="d-flex" style={{ margin: "0", padding: "0", overflowX: "hidden" }}>
                    <div className=" border-right" id="sidebar-wrapper" style={{ margin: "0", padding: "0", background: "#099e96", color: "#fff" }}>

                        {routes.map((route, index) => (

                            <div className="list-group list-group-flush" key={index} >
                                {/* <button className="btn btn-info" onClick={() => history.push("/Basic")}>Use</button> */}
                                <Link to={`${url}${route.path}`} className="list-group-item list-group-item-action " style={{ background: "#099e96", color: "#fff" }}>{route.featureName}</Link>
                            </div>

                        ))}

                    </div>


                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={`${path}${route.path}`}
                                exact={route.exact}

                            >
                                {route.component}
                            </Route>
                        ))}




                    </Switch>


                </div>
            </div>
        </Router>



    )
}

export default Dashboard

