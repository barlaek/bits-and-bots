import React, { useState } from "react";
import chevronRight from "../images/chevron_right.svg";
import chevronLeft from "../images/chevron_left.svg"
import * as styled from "./Slider.styles.js";

const Slider = (children) => {
    const [imageIndex, setImageIndex] = useState(0);
    const data = children.productOnSale;

    const next = () => {
        setImageIndex((state) => (state += 1));
        if (imageIndex === data.length - 1){
            setImageIndex(0);   
        }
    };

    const previous = () => {
        setImageIndex((state => state -= 1));
        if (imageIndex === 0) {
            setImageIndex(data.length - 1)
        }  
    };

    return (
        <styled.Container>
            <styled.Title>Titles on sale</styled.Title>
            <styled.Image src={data[imageIndex].src} alt={data[imageIndex].alt} />
            <styled.NavButton right onClick={next}>
                <img src={chevronRight} alt="right arrow"/>
            </styled.NavButton>
            <styled.NavButton onClick={previous}>
                <img src={chevronLeft} alt="left arrow"/>
            </styled.NavButton>
        </styled.Container>
    )
}

export default Slider;