import React from "react";
import "./contactus.css"
import Form from "./form";
import Map from "../../gfx/map.JPG";

function Contactus() {
    return (
        <div className="contactus">
            <div className="left">
                <div className="bigText">
                    <h2 className="white-text">CONTACT</h2>
                </div>
                <img src={Map} alt="" />
                <div className="address">
                    <h4>RUNINC</h4>
                    <p>Kannikedegade 12</p>
                    <p>8000 Århus C</p>
                    <p>Telefon 16 13 26 96</p>
                    <p>info@runinc.dk</p>
                </div>
            </div>
            <div className="right">
                <Form />
            </div>
        </div>
    )
}

export default Contactus;