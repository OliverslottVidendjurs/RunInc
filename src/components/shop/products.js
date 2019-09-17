import React, { useState } from "react";
import "./products.css";
import Product from "./product";
import Shoe1 from "../../imgs/shoe_01.jpg";
import Shoe2 from "../../imgs/shoe_02.jpg";
import Shoe3 from "../../imgs/shoe_03.jpg";
import Shoe4 from "../../imgs/shoe_04.jpg";

function Products() {
    const [shoes] = useState([{
        title: "Puma Highland 3000 - brown",
        img: Shoe1
    },
    {
        title: "Asics Free Street",
        img: Shoe2
    },
    {
        title: "New Balance Runner Bounce",
        img: Shoe3
    },
    {
        title: "New Balance New York 2018",
        img: Shoe4
    },
    {
        title: "Puma Highland 3000 - brown",
        img: Shoe1
    },
    {
        title: "New Balance New York 2018",
        img: Shoe2
    },
    ]);
    let productList = shoes.map(shoe =>
        <Product key={Math.random()} product={shoe} />
    );
    return (
        <div className="products">
            {productList}
        </div>
    );
}

export default Products;