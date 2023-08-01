import React from "react";
import * as styled from "./Slider.styles.js";

const Slider = (bannerProduct) => {
    // const hero = bannerProduct.map((images) => {
    //     return images;
    // })

    const hero = bannerProduct.bannerProduct.map((images) => {
        return <styled.ImageContainer key={images.name} src={images.src} alt={images.alt} />
    })

    return (
        <styled.Container key={hero.name}>
            {hero}
        </styled.Container>
    )
}

export default Slider;