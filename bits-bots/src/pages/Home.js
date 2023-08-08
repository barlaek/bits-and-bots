import React, { useState } from 'react';
import { useApi } from '../Utilities/Hooks/useApi';
import { productUrl } from '../Utilities/Constants/endpoints';
import Loading from '../Components/Loading';
import Card from '../Components/Card';
import * as styled from './Home.styles.js';
import Filter from '../Components/Filter';
import FilterSelect from '../Components/FilterSelect';
import Slider from '../Components/Slider';

function Home() {
  const { data, loading, error } = useApi(`${productUrl}`);
  const [filterTextValue, setFilterText] = useState('all');

  const filteredProductList = data.filter((product) => {
    if (filterTextValue === 'onSale') {
      return product.on_sale === true;
    } else if (filterTextValue === 'fullPrice') {
      return product.on_sale === false;
    } else {
      return product;
    }
  });

  console.log(filteredProductList);

  const productOnSale = data.filter((product) => {
    if (product.on_sale === true) {
      return { product };
    }
  });

  console.log(productOnSale);

  if (loading) {
    return <Loading key={loading} />;
  }

  if (error) {
    return <div>Error</div>;
  }

  function onFiltervalueSelected(filterValue) {
    setFilterText(filterValue);
  }

  console.log(localStorage.length);

  return (
    <styled.Container>
      {!data ? (
        <Loading key={loading} />
      ) : (
        <Slider productOnSale={productOnSale} />
      )}
      <Filter label="Filter">
        <FilterSelect filterValueSelected={onFiltervalueSelected} />
      </Filter>
      <Card filteredProductList={filteredProductList} />
    </styled.Container>
  );
}

export default Home;
