import { render, screen } from '@testing-library/react';
import Login from '../Components/Login';

describe('Login', () => {
  test('displays a login form', () => {
    render(<Login />);
    screen.debug();
  });
});
