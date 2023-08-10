import React from 'react';
import { useParams } from 'react-router';
import { useApi } from '../Utilities/Hooks/useApi';
import { productUrl } from '../Utilities/Constants/endpoints';
import GameDetails from '../Components/GameDetails';
import Loading from '../Components/Loading';
import Return from '../Components/Return';
import AddToCart from '../Components/AddToCart';
import DetailsGallery from '../Components/DetailsGallery';

function Details() {
  let { id } = useParams();
  const { data, loading, error } = useApi(`${productUrl}${id}`);

  if (loading) {
    return <Loading key={loading} />;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div key={data.id}>
      <Return />
      <DetailsGallery data={data} />
      <AddToCart data={data} />
      <GameDetails data={data} />
    </div>
  );
}

export default Details;
