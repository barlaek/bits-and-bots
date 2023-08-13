import { render } from '@testing-library/react';
import CartList from '../Components/CartList';

test("renders order summary component", () => {
    const cartItems = [{
        cart: "item",
        prices: {
            price: "price",
        },
        images: [{
            alt: "string",
            src: "url",
        }]
    }]
  render(
        <CartList 
            cartItems={cartItems}
        />
  );
})