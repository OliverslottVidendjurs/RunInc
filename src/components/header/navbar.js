import React from "react";
import {NavLink} from "react-router-dom";
import "./navbar.css";

function Navbar() {
    return (
        <nav className="white">
            <ul>
                <li><NavLink className="black-text" exact to="/">Home</NavLink></li>
                <li><NavLink className="black-text" to="/events">Events</NavLink></li>
                <li><NavLink className="black-text" to="/shop">Shop</NavLink></li>
                <li><NavLink className="black-text" to="/contactus">Contact us</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;