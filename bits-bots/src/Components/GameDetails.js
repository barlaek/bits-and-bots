import React from "react";

function GameDetails(props) {
    const details = props.data
    return (
        <div>
            <h2>{details.name}</h2>
        </div>
    )
}

export default GameDetails;