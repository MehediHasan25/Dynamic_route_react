import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom';
import {routes} from '../RouteName';
export class Content extends Component {
   
    render() {
        return (
            <div>
            <Switch>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={route.component}
                            />
                        ))}
                    </Switch>
            </div>
            
        )
    }
}

export default Content;
