import React, { useState } from "react";
import * as styled from "./Slider.styles.js";

const Slider = (props) => {
    const [imageIndex, setImageIndex] = useState(0);

    return (
        <styled.Container>
            <styled.ImageContainer src={props[0]} /> 
        </styled.Container>
    )
}

export default Slider;