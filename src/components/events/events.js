import React from "react";
import LeftImg from "../../gfx/event.jpg";
import "./events.css";

function Events() {
    return (
        <div className="row flex">
            <div className="imgWrapper col s9">
                <img src={LeftImg} alt="Many people running" className="responsive-img" />
            </div>
            <div className="eventsWrapper col s3 yellow">
                <h3>EVENTS</h3>
                <ul className="eventList">
                    <li>
                        <h4>COPENHAGEN MARATHON</h4>
                        <p>Den 29. maj 2018</p>
                    </li>
                    <li>
                        <h4>AARHUS CITY RUN</h4>
                        <p>Den 1. juni 2018</p>
                    </li>
                    <li>
                        <h4>BERLIN MARATHON</h4>
                        <p>Den 6. juni 2018</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Events;