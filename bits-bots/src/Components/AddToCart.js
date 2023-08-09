import React from "react";
import * as styled from "./AddToCart.styles.js";

function AddToCart(props) {
    const details = props.data;
    return (
        <styled.Container>
            <h1>{details.name}</h1>
            <h3>${parseInt(`${details.prices.price}` / 100).toFixed(2)}</h3>
        </styled.Container>
    )
}

export default AddToCart;