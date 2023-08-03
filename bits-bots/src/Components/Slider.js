import React, { useState } from "react";
import chevronRight from "../images/chevron_right.svg";
import chevronLeft from "../images/chevron_left.svg"
import * as styled from "./Slider.styles.js";

const Slider = (children) => {
    const [imageIndex, setImageIndex] = useState(0);

    const images = children.bannerProduct.map((images) => {
        return <styled.Image key={images.name} src={images.src} alt={images.alt} />
    })

    const next = () => {
        setImageIndex(state => state += 1);
        if (imageIndex === children.length -1){
            setImageIndex(0);   
        }
    }

    const previous = () => {
        setImageIndex(state => state -= 1);
        if (imageIndex === 0) {
            setImageIndex(children.length -1)
        }  
    }
    return (
        // <styled.Container array={children.length > 1}>
        //     <styled.CarouselImages position={position}>
        //         {hero}
        //     </styled.CarouselImages>
        //     <styled.PreviousButton onClick={() => handlePreviousClick()}>
        //             <styled.Arrow src={chevron_left} alt="left arrow"/>
		// 		</styled.PreviousButton>
		// 		<styled.NextButton onClick={() => handleNextClick()}>
		// 			<styled.Arrow src={chevron_right} alt="right-arrow"/>
		// 		</styled.NextButton>
        // </styled.Container>
        <styled.Container>
            {images}
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