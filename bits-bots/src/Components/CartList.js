import React from "react";
import * as styled from "./CartList.styles"

const CartList = (props) => {
    const content = props.cart.map((items) => {
        return <p>{items.name}</p>
    })

    return {content}
}

export default CartList;