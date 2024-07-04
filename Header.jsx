import React from "react";
import './Header.css';
import { NavLink } from "react-router-dom";
import logo from '../../Assests/cottheta_logo.png';

const Header = () => {
    return(
    <div>
        <div className="header">
        <img src={logo} alt="Cottheta" />
        <ul>
            <li><NavLink to='/'> Home</NavLink></li>
            <li> <NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>
        </div>
    </div>   
    ); 
}

export default Header;