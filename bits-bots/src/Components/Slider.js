import React, { useState } from "react";
import chevron_right from "../images/chevron_right.svg";
import chevron_left from "../images/chevron_left.svg";
import * as styled from "./Slider.styles.js";

const Slider = (children) => {
    const [position, setPosition] = useState(0);
    const directions = {
        NEXT: "next",
        PREV: "previous",
    };

    const handlePreviousClick = () => {
        handleArrowClick(directions.PREV);
    };

     const handleNextClick = () => {
        handleArrowClick(directions.NEXT);
    };

     const handleArrowClick = (direction) => {
        let newPosition = 0;
        if (direction === directions.NEXT) {
            newPosition = position === children.length - 1 ? 0 : position + 1;
        } else {
            newPosition = position === 0 ? children.length - 1 : position -1 ;
        }

        handleSlide(newPosition);
    };

    const handleSlide = (position) => {
        setPosition(position);
    };

    const hero = children.bannerProduct.map((images) => {
        return <styled.Image key={images.name} src={images.src} alt={images.alt} />
    })

    return (
        <styled.Container hasMultipleImages={children.length > 1}>
            <styled.CarouselImages position={position}>
                {hero}
            </styled.CarouselImages>
            <styled.PreviousButton onClick={() => handlePreviousClick()}>
                    <styled.Arrow src={chevron_left} alt="left arrow"/>
				</styled.PreviousButton>
				<styled.NextButton onClick={() => handleNextClick()}>
					<styled.Arrow src={chevron_right} alt="right-arrow"/>
				</styled.NextButton>
        </styled.Container>
    )
}

export default Slider;