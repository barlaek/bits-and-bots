import React from "react";
import * as styled from "./Slider.styles.js";

const Slider = (children) => {
    const hero = children.bannerProduct.map((images) => {
        return <styled.Image key={images.name} src={images.src} alt={images.alt} />
    })

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
        <div>
            {hero}
        </div>
    )
}

export default Slider;