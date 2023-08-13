import { render } from '@testing-library/react';
import FilterSelect from '../Components/FilterSelect';

test('renders filterselect component', () => {
  const onFilterValueSelected = [
    {
      id: 200,
      name: 'string',
    },
  ];

  render(<FilterSelect onFiltervalueSelected={onFilterValueSelected} />);
});
