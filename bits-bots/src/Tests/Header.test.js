import { render } from '@testing-library/react';
import Header from '../Components/Header';
import { MemoryRouter } from 'react-router-dom';

test("renders header component", () => {
  render(
    <MemoryRouter>
        <Header />
    </MemoryRouter>
  );
})