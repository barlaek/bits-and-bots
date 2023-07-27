import React from 'react';
import { useApi } from '../Utilities/Hooks/useApi';
import { productUrl } from '../Utilities/Constants/endpoints';
import Loading from '../Components/Loading';
import Card from '../Components/Card';
import * as styled from "./Home.styles.js";

function Home() {
  const { data, loading, error } = useApi(`${productUrl}`);

  if (loading) {
    return <Loading key={loading} />;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <styled.Container>
      <Card data={data} />
    </styled.Container>
  );
}

export default Home;
