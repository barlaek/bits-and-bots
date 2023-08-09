import React, { useEffect, useState } from "react";
import chevronRight from '../images/chevron_right.svg';
import chevronLeft from '../images/chevron_left.svg';
import * as styled from "./DetailsGallery.styles.js";

const DetailsGallery = (children) => {
    const [imageIndex, setImageIndex] = useState(0);
    const [array, setArray] = useState([]);

    useEffect(() => {
        async function checkData() {
            try {
                const data = children.data;
                console.log(data);
                const images = data.images
                setArray(images)
            } catch (error) {
                console.log(error)
            }
        }
        checkData();
    }, [children])

    const gallery = array.map((image) => {
        return <styled.Image src={image.src} alt={image.alt}/>
    })

    const next = () => {
        setImageIndex((state) => (state += 1));
        if (imageIndex === array.length - 1) {
          setImageIndex(0);
        }
      };
    
      const previous = () => {
        setImageIndex((state) => (state -= 1));
        if (imageIndex === 0) {
          setImageIndex(array.length - 1);
        }
      };
    return (
        <styled.Container>
            {gallery[imageIndex]}
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