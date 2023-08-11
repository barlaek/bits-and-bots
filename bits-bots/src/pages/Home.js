import React, { useState } from 'react';
import { useApi } from '../Utilities/Hooks/useApi';
import { productUrl } from '../Utilities/Constants/endpoints';
import Loading from '../Components/Loading';
import Card from '../Components/Card';
import * as styled from './Home.styles.js';
import Filter from '../Components/Filter';
import FilterSelect from '../Components/FilterSelect';
import Slider from '../Components/Slider';
import Error from '../Components/Error';

/**
 * Home component
 * @returns a gallery, filter button, and array of product cars
 */
function Home() {
  /**
   * API hook fetching the data
   */
  const { data, loading, error } = useApi(`${productUrl}`);
  /**
   * Initializes the filter state
   */
  const [filterTextValue, setFilterText] = useState('all');
  /**
   * Filter function that matches fetched product data with selected filter value
   */
  const filteredProductList = data.filter((product) => {
    if (filterTextValue === 'onSale') {
      return product.on_sale === true;
    } else if (filterTextValue === 'fullPrice') {
      return product.on_sale === false;
    } else {
      return product;
    }
  });
  /**
   * Filters for products with on_sale value
   */
  const productOnSale = data.filter((product) => {
    if (product.on_sale === true) {
      return { product };
    }
  });
  /**
   * Checks for loading state and returns a loading component
   */
  if (loading) {
    return <Loading key={loading} />;
  }
  /**
   * Checks for error state and returns error component
   */
  if (error) {
    return <Error key={error} />;
  }
  /**
   * Filtration function that takes an
   * @param {array} filterValue
   * and updates the state and array of filtered products
   */
  function onFiltervalueSelected(filterValue) {
    setFilterText(filterValue);
  }

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
