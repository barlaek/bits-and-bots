import React from 'react';
import { useParams } from 'react-router';
import { useApi } from '../Utilities/Hooks/useApi';
import { productUrl } from '../Utilities/Constants/endpoints';
import GameDetails from '../Components/GameDetails';
import Loading from '../Components/Loading';
import Return from '../Components/Return';
import AddToCart from '../Components/AddToCart';
import DetailsGallery from '../Components/DetailsGallery';
import * as styled from './Details.styles.js';
import Error from '../Components/Error';

/**
 * Product details component
 * @returns the /details page
 */
function Details() {
  /**
   * Initializes the ID parameter
   */
  let { id } = useParams();
  /**
   * API hook that fetches product data by ID
   */
  const { data, loading, error } = useApi(`${productUrl}${id}`);
  /**
   * Checks for loading state and returns loading component
   */
  if (loading) {
    return <Loading key={loading} />;
  }
  /**
   * Checks for error state and returns error component
   */
  if (error) {
    return <Error keyt={error} />;
  }

  return (
    <div key={data.id}>
      <Return />
      <DetailsGallery data={data} />
      <styled.Wrapper>
        <AddToCart data={data} />
        <GameDetails data={data} />
      </styled.Wrapper>
    </div>
  );
}

export default Details;
