import { render } from '@testing-library/react';
import Tab from '../Components/Tab';
import { MemoryRouter } from 'react-router-dom';

test("renders return component", () => {
  render(
    <MemoryRouter>
        <Tab />
    </MemoryRouter>
  );
})