import React, { useState } from "react";
import * as styled from "./Slider.styles.js";

const Slider = (props) => {
    const [imageIndex, setImageIndex] = useState(0);
    const imageArray = props.productOnSale.map((imgs) => {
        if(imgs) {
            return imgs.images;
        }
    })

    console.log(imageArray);

    return (
        <styled.Container>
            <styled.ImageContainer src={props} /> 
        </styled.Container>
    )
}

export default Slider;