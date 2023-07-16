import React from 'react';
import { useApi } from '../Utilities/Hooks/useApi';
import { productUrl } from '../Utilities/Constants/endpoints';
import Loading from '../Components/Loading';
import Card from '../Components/Card';

function Home() {
  const { data, loading, error } = useApi(`${productUrl}`);

  if (loading) {
    return <Loading key={loading} />;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      <Card data={data} />
    </div>
  );
}

export default Home;
