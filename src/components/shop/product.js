import React from "react";
import "./product.css";

function Product(props) {
    return (
        <div className="product">
            <img src={props.product.img} alt="shoe" className="responsive-img" />
            <p>{props.product.title}</p>
        </div>
    );
}

export default Product;