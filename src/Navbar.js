import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";


const Navbar = () => {
    return (
        
        <Fragment >
            <Link className="nav-bar" to="/">Home </Link>
            <Link className="nav-bar" to="/india"> India </Link>
            <Link className="nav-bar" to = "/karnataka"> Karnataka</Link>
           
        </Fragment>
    )
    
}


export default Navbar;
