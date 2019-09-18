import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import Logo from "../../gfx/runinc_logo.svg";

function Navbar() {
    return (
        <nav>
            <div>
                <img src={Logo} alt="logo" className="logo" />
            </div>
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/events">Events</NavLink></li>
                <li><NavLink to="/shop">Shop</NavLink></li>
                <li><NavLink to="/contactus">Contact us</NavLink></li>
            </ul>
            <form action="TODO">
                <div className="input-field">
                    <input id="search" type="search" />
                    <button type="submit">SEARCH</button>
                </div>
            </form>
        </nav>
    );
}

export default Navbar;