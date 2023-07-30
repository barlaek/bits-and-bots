import React, { useState } from 'react';
import { useApi } from '../Utilities/Hooks/useApi';
import { productUrl } from '../Utilities/Constants/endpoints';
import Loading from '../Components/Loading';
import Card from '../Components/Card';
import * as styled from './Home.styles.js';
import Filter from '../Components/Filter';
import FilterSelect from '../Components/FilterSelect';

function Home() {
  const { data, loading, error } = useApi(`${productUrl}`);
  const [filterTextValue, setFilterText] = useState('all');

  const filteredProductList = data.filter((product) => {
    if(filterTextValue.on_sale === true) {
      return product.on_sale === true;
    } else if(!filterTextValue.on_sale === false) {
      return product.on_sale === false;
    } else {
      return product;
    }
  })

  if (loading) {
    return <Loading key={loading} />;
  }

  if (error) {
    return <div>Error</div>;
  }

  function onFiltervalueSelected(filterValue) {
    console.log(filterValue);
    setFilterText(filterValue);
  }

  return (
    <styled.Container>
        <Filter label="Filter">
          <FilterSelect filterValueSelected={onFiltervalueSelected} />
        </Filter>
      <Card filteredProductList={filteredProductList} />
    </styled.Container>
  );
}

export default Home;
