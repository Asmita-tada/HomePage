import React from "react";
import App from "../App";

function Product(props)
{

    return(
        <div>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    )
}


export default Product