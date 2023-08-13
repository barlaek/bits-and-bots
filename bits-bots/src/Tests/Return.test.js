import { fireEvent, getByRole, queryByText, render, screen } from '@testing-library/react';
import Return from '../Components/Return';
import { MemoryRouter } from 'react-router-dom';

test("renders return component", () => {
    const mockCall = jest.fn(() => {});
    const history = jest.fn();
  render(
    <MemoryRouter>
        <Return mockCall={mockCall(history)}/>
    </MemoryRouter>
  );
  const button = screen.getByRole("button");
  fireEvent.click(button);

  expect(mockCall).toHaveBeenCalledTimes(1);
})