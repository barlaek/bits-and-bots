import { render } from '@testing-library/react';
import CartMessage from '../Components/CartMessage';

test("renders cart component component", () => {
    const cartItems = [{
        cart: "item",
        prices: {
            price: "price",
        },
    }]
  render(
        <CartMessage 
            cartItems={cartItems}
        />
  );
})