import React from "react";
import "./form.css";

function Form() {
    return (
        <div className="form">
            <div>
                <h3>SEND EN BESKED</h3>
                <form action="todo">
                    <div className="form-group">
                        <label htmlFor="name">NAVN: </label>
                        <input id="name" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">EMAIL:</label>
                        <input id="email" type="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">TELEFONNR.:</label>
                        <input id="phone" name="phone" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="besked">BESKED:</label>
                        <textarea name="besked" id="besked"></textarea>
                    </div>
                    <button type="submit">SEND BESKED</button>
                </form>
            </div>
        </div>
    )
}

export default Form;