import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProfileSelect from '../Components/ProfileSelect';

test("renders profileselect component", () => {
    const mockCall = jest.fn(() => {});
    const history = jest.fn();
  render(
    <MemoryRouter>
        <ProfileSelect mockCall={mockCall(history)}/>
    </MemoryRouter>
  );
  const button = screen.getByRole("button");
  fireEvent.click(button);

  expect(mockCall).toHaveBeenCalledTimes(1);
})