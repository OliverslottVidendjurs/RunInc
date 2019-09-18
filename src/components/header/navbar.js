import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import Logo from "./logo";

function Navbar() {
    const [showMenu, setShowMenu] = useState(false); 

    return (
        <nav>
            <i onClick={() => showMenu ? setShowMenu(false) : setShowMenu(true)} className="fas fa-bars"></i>
            <Logo />
            <ul className={showMenu ? "customActive" : ""}>
                <li><NavLink onClick={() => setShowMenu(false)} exact to="/">Home</NavLink></li>
                <li><NavLink onClick={() => setShowMenu(false)} to="/events">Events</NavLink></li>
                <li><NavLink onClick={() => setShowMenu(false)} to="/shop">Shop</NavLink></li>
                <li><NavLink onClick={() => setShowMenu(false)} to="/contactus">Contact us</NavLink></li>
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