import React, { useState } from "react";
import chevron_right from ".";
import chevron_left from ".../images/chevron_left.svg";
import * as styled from "./Gallery.styles.js";

const Gallery = (children) => {
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

    return (
        <styled.Wrapper>
            <styled.Container array={children.length > 1}>
                <styled.CarouselImages position={position}>
                    {children.map(child => (
                        <styled.CarouselItem key={child.key}>{child}</styled.CarouselItem>
                    ))}
                </styled.CarouselImages>
                <styled.PreviousButton onClick={() => handlePreviousClick()}>
                        <styled.Arrow src={chevron_left} alt="left-arrow"/>
                    </styled.PreviousButton>
                    <styled.NextButton onClick={() => handleNextClick()}>
                        <styled.Arrow src={chevron_right} alt="right-arrow"/>
                    </styled.NextButton>
            </styled.Container>
        </styled.Wrapper>
    )
}

export default Gallery;