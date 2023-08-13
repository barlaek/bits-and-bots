import { fireEvent, render, screen } from '@testing-library/react';
import Profile from '../Components/Profile';

test('renders profile component', () => {
  const mockCall = jest.fn(() => {});
  const history = jest.fn();
  const prop = {
    image: 'url',
  };
  render(<Profile prop={prop} mockCall={mockCall(history)} />);
  const button = screen.getByRole('button');
  fireEvent.click(button);

  expect(mockCall).toHaveBeenCalledTimes(1);
});
