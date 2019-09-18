import React from "react";
import "./product.css";

function Product(props) {
    return (
        <div className="product">
            <img src={props.product.img} alt="shoe" />
            <p>{props.product.title}</p>
        </div>
    );
}

export default Product;