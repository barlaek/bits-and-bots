import React, { useState } from "react";
import * as styled from "./Slider.styles.js";

const Slider = ({bannerProduct}) => {
    const [imageIndex, setImageIndex] = useState(0);

    return (
        <styled.Container>
            <styled.ImageContainer src={bannerProduct.images[0].src} alt="whatever"/> 
        </styled.Container>
    )
}

export default Slider;