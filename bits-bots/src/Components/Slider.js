import React, { useState } from "react";
import * as styled from "./Slider.styles.js";

const Slider = ({bannerProduct}) => {
    // const [imageIndex, setImageIndex] = useState(0);
    const images = bannerProduct.map((prop) => {
        return <styled.ImageContainer src={prop} alt={prop} />
    })

    return (
        <styled.Container>
            {/* <styled.ImageContainer src={bannerProduct} alt="whatever"/>  */}
            {images}
        </styled.Container>
    )
}

export default Slider;