import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../RouteName';
import "../css/Sidebar.css";

const Sidebar = () => {
    return (

           <div className=" border-right" id="sidebar-wrapper" style={{ margin: "0", padding: "0", background: "#099e96", color: "#fff" }}>
                    
                    {routes.map((route, index) => (

                        <div className="list-group list-group-flush" key={index} >
                            {/* <button className="btn btn-info" onClick={() => history.push("/Basic")}>Use</button> */}
                            <Link to={route.path} className="list-group-item list-group-item-action " style={{ background: "#099e96", color: "#fff" }}>{route.featureName}</Link>
                        </div>

                    ))}

                </div>

     

    )
}

export default Sidebar;