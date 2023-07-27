import React from "react";
import { useParams } from "react-router";
import { useApi } from "../Utilities/Hooks/useApi";
import { productUrl } from "../Utilities/Constants/endpoints";
import GameDetails from "../Components/GameDetails";
import Loading from "../Components/Loading";

function Details() {
    let { id } = useParams();
    const { data, loading, error } = useApi(`${productUrl}/${id}`) 

    if (loading) {
        return <Loading key={loading} />;
      }
    
      if (error) {
        return <div>Error</div>;
      }

    return (
        <div>
            <GameDetails data={data} />
        </div>
    );
}

export default Details;