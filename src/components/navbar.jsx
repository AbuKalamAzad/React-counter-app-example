import React, { Component } from 'react';

const NavBar = (props) => {
    return ( <div className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="#"> NavBar <span className="badge badge-pill badge-secondary">{props.totalcounters}</span>
    </a>
        </div> );
}
 

 
export default NavBar;