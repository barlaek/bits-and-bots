import React from "react";
import { useNavigate } from "react-router-dom";
import * as styled from "./OrderSummary.styles.js";

const OrderSummary = (props) => {
    const navigate = useNavigate();
    let prodPrice;

    if(props) {
        prodPrice = props.cartItems.map((prop) => {
            return parseInt(`${prop.prices.price}` / 100).toFixed(2);
        })
    }
    console.log(prodPrice)
    let sum = prodPrice.reduce((total, value) => total = total + parseInt(value), 0)
    console.log(sum.toFixed(2))

    return (
        <styled.Container>
            <styled.Summary>
                Order summary
            </styled.Summary>
            <styled.LineBox>
                <styled.Line />
            </styled.LineBox>
            <styled.TotalBox>
                <styled.Total>Total: ${!sum ? 0.00 : sum.toFixed(2)}</styled.Total>
            </styled.TotalBox>
            <styled.CheckoutBox>
                {!sum ? null : <styled.CheckoutBtn onClick={() => navigate("/checkout")}>Checkout</styled.CheckoutBtn>}
            </styled.CheckoutBox>
        </styled.Container>
    )
}

export default OrderSummary;