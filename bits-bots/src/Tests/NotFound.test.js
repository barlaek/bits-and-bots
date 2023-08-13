import { render } from '@testing-library/react';
import NotFound from '../Components/NotFound';

test("renders not found component", () => {
  render(
        <NotFound />
  );
})