import React, { useState } from "react";
import chevronRight from '../images/chevron_right.svg';
import chevronLeft from '../images/chevron_left.svg';
import * as styled from "./DetailsGallery.styles.js";

const DetailsGallery = (children) => {
    const [imageIndex, setImageIndex] = useState(0);
    const data = children.data;

    // const images = data.images.map((image) => {
    //     return <styled.Image src={image.src} alt={image.alt} />
    // })

    // console.log(images);

    const checkData = (data) => {
        if(data) {
            const images = data.images.map((image) => {
                return <styled.Image src={image.src} alt={image.alt} />
            })

            return images;
        }
    }

    // if(!data) {
    //     return null;
    // } else {
    //     setArray(data.images);
    // }

    // console.log(data);
    // console.log(array);

    const next = () => {
        setImageIndex((state) => (state += 1));
        if (imageIndex === data.length - 1) {
          setImageIndex(0);
        }
      };
    
      const previous = () => {
        setImageIndex((state) => (state -= 1));
        if (imageIndex === 0) {
          setImageIndex(data.length - 1);
        }
      };
    return (
        <styled.Container>
            {/* {data ? images[imageIndex] : null } */}
            <styled.NavButton right onClick={next}>
                <img src={chevronRight} alt="right arrow" />
            </styled.NavButton>
            <styled.NavButton onClick={previous}>
                <img src={chevronLeft} alt="left arrow" />
            </styled.NavButton>
        </styled.Container>
    )
}

export default DetailsGallery;