import React from "react";
import * as styled from "./OrderSummary.styles.js";

const OrderSummary = (props) => {
    let prodPrice;

    if(props) {
        prodPrice = props.priceSum.map((prop) => {
            return <p>${parseInt(`${prop.prices.price}` / 100).toFixed(2)}</p>
        })
    }
    return (
        <styled.Container>
            <p> Hello </p>
            {prodPrice}
        </styled.Container>
    )
}

export default OrderSummary;