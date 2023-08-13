import { render, screen } from '@testing-library/react';
import Card from '../Components/Card';
import { MemoryRouter } from 'react-router-dom';

test("renders card component", () => {
  const filteredProductList = [{
    id: 200,
    name: "name",
    images: [
      {
        alt: "alt",
      }
    ],
    prices: {
      sales_price: "number"
    },
  },
];

  render(
    <MemoryRouter>
      <Card filteredProductList={filteredProductList} />
    </MemoryRouter>
  );
})