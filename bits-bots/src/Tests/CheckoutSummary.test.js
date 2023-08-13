import { render } from '@testing-library/react';
import CheckoutSummary from '../Components/CheckoutSummary';

test('renders checkout summary component', () => {
  const cartItems = [
    {
      cart: 'item',
      prices: {
        price: 'price',
      },
    },
  ];
  render(<CheckoutSummary cartItems={cartItems} />);
});
