import React from 'react';
import { Link, NavLink } from "react-router-dom";
const Sidebar = () =>{

	return(
        
       
           <nav id="sidebar" className="col-md-2 nav nav-pills nav-stacked">
            
                <Link className="navbar-brand"  to="/">
                <h3>MediCare</h3> 
                </Link>
                
            
            <div>
            <ul className="list-unstyled components">                
                <li className="active">
                    <NavLink className="nav-link" exact="true" to='/Home'>Inventory</NavLink>
                    
                </li>
                <li>
                    <NavLink className="nav-link" exact="true" to="/Sales">Sales Executive</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" exact="true" to="/CreateOrder">Create Order</NavLink>
                    
                </li>
                <li>
                    <NavLink className="nav-link" exact="true" to="/Orders">Orders</NavLink>
                </li>
                
            </ul>    
            </div>        
        </nav>
       
     
     
        );
}

export default Sidebar;