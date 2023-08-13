import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Slider from '../Components/Slider';

describe('Slider', () => {
  test('it renders correctly', () => {
    const productOnSale = [
      {
        alt: 'alt',
        id: 200,
        name: 'name',
        src: 'url',
        srcset: 'url',
        thumbnail: 'url',
      },
    ];

    render(
      <MemoryRouter>
        <Slider productOnSale={productOnSale} />
      </MemoryRouter>,
    );
  });
});
