import React from 'react';
import { useApi } from '../Utilities/Hooks/useApi';
import { productUrl } from '../Utilities/Constants/endpoints';
import Loading from '../Components/Loading';

function Home() {
  const { data, loading, error } = useApi(`${productUrl}`);

  if (loading) {
    return <Loading key={loading} />;
  }

  if (error) {
    return <div>Error</div>;
  }

  return <div key={data}>Data loaded</div>;
}

export default Home;
