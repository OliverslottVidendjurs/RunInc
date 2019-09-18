import React from "react";
import "./shop.css"
import Categories from "./categories";
import Products from "./products";

function Shop() {
    return (
        <div className="shop">
            <div className="left">
                <Categories />
            </div>
            <div className="right">
                <div className="bigText">
                    <h2 className="white-text">SHOP</h2>
                </div>
                <Products />
            </div>
        </div>
    )
}

export default Shop;