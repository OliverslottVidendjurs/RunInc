import React from "react";
import bigImg from "../../gfx/hero.jpg";
import "./home.css";
import Events from "../events/events";
import Shop from "../shop/shop";
import Contactus from "../contactus/contactus";

function Home() {
    return (
        <div>
            <div className="home">
                <img src={bigImg} alt="a man running" className="responsive-img" />
                <div className="bigText">
                    <h2 className="white-text">WE LOVE <span className="yellow-text">RUNNING</span></h2>
                </div>
            </div>
            <Events/>
            <Shop/>
            <Contactus/>
        </div>
    );
}

export default Home;