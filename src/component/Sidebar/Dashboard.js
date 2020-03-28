import React, { Component } from 'react';
import RoutingSide from './RoutingSide';
import Nav from './Nav';
import { BrowserRouter as Router , Switch,Route} from 'react-router-dom';
import {routes} from '../RouteName';


export class Dashboard extends Component {
    render() {
        return (
            
            <div >
               
                <RoutingSide/>
                  
            </div>
            
        )
    }
}

export default Dashboard;
