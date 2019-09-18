import React from "react";
import LeftImg from "../../gfx/event.jpg";
import "./events.css";

function Events() {
    return (
        <div className="flex events">
            <div className="imgWrapper">
                <img src={LeftImg} alt="Many people running" />
                <div className="bigText">
                    <h2 className="white-text">NEXT EVENT</h2>
                </div>
            </div>
            <div className="eventsWrapper">
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