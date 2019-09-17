import React from "react";
import "./shop.css"
import Categories from "./categories";
import Products from "./products";

function Shop() {
    return (
        <div className="row flex">
            <div className="col s3 yellow">
                <Categories />
            </div>
            <div className="col s9">
                <Products/>
            </div>
        </div>
    )
}

export default Shop;