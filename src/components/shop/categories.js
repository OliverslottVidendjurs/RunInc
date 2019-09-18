import React from "react";
import "./categories.css";

function Categories(){
    return (
        <div className="categories">
            <h3>
                SHOP
            </h3>
            <h4>
                RUNNING SHOP
            </h4>
            <p>Gratis fragt ved over kr. 500.-</p>
            <ul>
                {/* <li><a href="#">Nike</a></li>
                <li><a href="#">Adidas</a></li>
                <li><a href="#">Puma</a></li>
                <li><a href="#">Asics</a></li>
                <li><a href="#">Hummel</a></li> */}
                <li><button>Nike</button></li>
                <li><button>Adidas</button></li>
                <li><button>Puma</button></li>
                <li><button>Asics</button></li>
                <li><button>Hummel</button></li>
            </ul>
        </div>
    )
}

export default Categories;