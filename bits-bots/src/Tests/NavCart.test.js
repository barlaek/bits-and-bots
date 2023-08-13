import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavCart from '../Components/NavCart';

test("renders NavCart component", () => {
    const mockCall = jest.fn(() => {});
    const history = jest.fn();
  render(
    <MemoryRouter>
        <NavCart mockCall={mockCall(history)}/>
    </MemoryRouter>
  );
  const button = screen.getByRole("button");
  fireEvent.click(button);

  expect(mockCall).toHaveBeenCalledTimes(1);
})