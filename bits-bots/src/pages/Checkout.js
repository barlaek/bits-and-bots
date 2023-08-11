import React from "react";
import CheckoutForm from "../Components/CheckoutForm.js";
import * as styled from "./Checkout.styles.js";

const Checkout = () => {
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
            <styled.CartContainer>
                <styled.CartInfo>Cart: ({cartItems.length} items)</styled.CartInfo>
            </styled.CartContainer>
            <styled.FormContainer>
                <styled.Details>Checkout details</styled.Details>
                <CheckoutForm />
            </styled.FormContainer>
        </styled.Container>
    )
}

export default Checkout;