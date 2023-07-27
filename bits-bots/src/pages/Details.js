import React from "react";
import { useParams } from "react-router";
import { useApi } from "../Utilities/Hooks/useApi";
import { productUrl } from "../Utilities/Constants/endpoints";
import GameDetails from "../Components/GameDetails";

function Details() {
    let { id } = useParams();
    const { data, loading, error } = useApi(`${productUrl}/${id}`) 
    return (
        <div>
            <GameDetails data={data} loading={loading} error={error} />
        </div>
    );
}

export default Details;