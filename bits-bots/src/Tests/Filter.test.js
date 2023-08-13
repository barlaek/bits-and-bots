import { fireEvent, render, screen } from '@testing-library/react';
import Filter from '../Components/Filter';

test('renders filter component', () => {
  const mockCall = jest.fn(() => {});
  const history = jest.fn();
  render(<Filter Filter={Filter} mockCall={mockCall(history)} />);
  const button = screen.getByRole('button');
  fireEvent.click(button);

  expect(mockCall).toHaveBeenCalledTimes(1);
});
