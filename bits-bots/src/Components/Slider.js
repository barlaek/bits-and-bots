import React, { useState } from "react";
import * as styled from "./Slider.styles.js";

const Slider = (props) => {
    const [imageIndex, setImageIndex] = useState(0);

    return (
        <styled.Container>
            <styled.ImageContainer src={props.images} alt={props.images}/> 
        </styled.Container>
    )
}

export default Slider;