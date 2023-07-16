import React from "react";
import { useApi } from "../Utilities/Hooks/useApi";
import { productUrl } from "../Utilities/Constants/endpoints";

function Home() {
    const { data, loading, error } = useApi(`${productUrl}`);

    console.log(productUrl);
    
    if(loading) {
        return <div>Loading</div>;
    };

    if(error) {
        return <div>Error</div>;
    }

    return (
        <div>
            Data loaded
        </div>
    );
}

export default Home;