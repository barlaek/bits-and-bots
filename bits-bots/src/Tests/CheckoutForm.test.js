import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CheckoutForm from '../Components/CheckoutForm';

describe('CheckoutForm', () => {
  test('it submits data', () => {
    const onSubmit = jest.fn();
    const checkoutDetails = {
      name: 'name',
      address: 'address',
      creditCard: 'number',
    };
    render(
      <MemoryRouter>
        <CheckoutForm onSubmit={onSubmit(checkoutDetails)} />
      </MemoryRouter>,
    );
    const submit = screen.getByDisplayValue('Place order');
    fireEvent.submit(submit);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
