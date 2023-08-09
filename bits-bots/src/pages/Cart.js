import React from "react";
import { useCartState } from "../Utilities/Context/CartContext";
import * as styled from "./Cart.styles.js";

function Cart() {
    const state = useCartState();
    
    return (
        <styled.Container>

        </styled.Container>
    )
}

export default Cart;