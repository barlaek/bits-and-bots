import { fireEvent, render, screen } from '@testing-library/react';
import OrderSummary from '../Components/OrderSummary';
import { MemoryRouter } from 'react-router-dom';

test("renders order summary component", () => {
    // const mockCall = jest.fn(() => {});
    // const history = jest.fn();
    const cartItems = [{
        cart: "item",
        prices: {
            price: "price",
        },
    }]
  render(
    <MemoryRouter>
        <OrderSummary 
            cartItems={cartItems}
            // mockCall={mockCall(history)}
        />
    </MemoryRouter>
  );
//   const button = screen.getByRole("button");
//   fireEvent.click(button);

//   expect(mockCall).toHaveBeenCalledTimes(1);
})