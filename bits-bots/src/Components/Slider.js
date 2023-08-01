import React from "react";
import * as styled from "./Slider.styles.js";

const Slider = (bannerProduct) => {
    // const hero = bannerProduct.map((images) => {
    //     return images;
    // })

    return (
        <styled.Container>
            <styled.ImageContainer src={bannerProduct.src} alt={bannerProduct.alt} />
        </styled.Container>
    )
}

export default Slider;