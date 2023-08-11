import React, { useState } from "react";
import CartList from "../Components/CartList.js";
import CheckoutForm from "../Components/CheckoutForm.js";
import Return from '../Components/Return';
import * as styled from "./Checkout.styles.js";

const Checkout = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }

    let cartItems;

    if (localStorage.getItem('cart')) {
      const localCart = JSON.parse(localStorage.getItem('cart'));
      cartItems = localCart.map((items) => {
        return items;
      });
    } else {
      return null;
    }
    
    return (
        <styled.Container>
            <Return />
            <styled.CartContainer>
                <styled.CartInfo onClick={toggle}>Cart: ({cartItems.length} items)</styled.CartInfo>
                {open && <CartList cartItems={cartItems}/>}
            </styled.CartContainer>
            <styled.FormContainer>
                <styled.Details>Checkout details</styled.Details>
                <CheckoutForm />
            </styled.FormContainer>
        </styled.Container>
    )
}

export default Checkout;