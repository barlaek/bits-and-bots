import React, { useEffect, useState } from 'react';
import chevronRight from '../images/chevron_right.svg';
import chevronLeft from '../images/chevron_left.svg';
import * as styled from './DetailsGallery.styles.js';

/**
 * Gallery component that takes an
 * @param {array of images} children
 * @returns a gallery
 */
const DetailsGallery = (children) => {
  /**
   * Initializes the index to be looped over
   */
  const [imageIndex, setImageIndex] = useState(0);
  /**
   * Initializes the array of images
   */
  const [array, setArray] = useState([]);

  /**
   * Async function to check if the image array has been passed into children props
   */
  useEffect(() => {
    async function checkData() {
      try {
        const data = children.data;
        console.log(data);
        const images = data.images;
        setArray(images);
      } catch (error) {
        console.log(error);
      }
    }
    checkData();
  }, [children]);

  /**
   * Initializes the gallery and stores an array of image jsx elements
   */
  const gallery = array.map((image) => {
    return <styled.Image src={image.src} alt={image.alt} />;
  });

  /**
   * Function that traverses the image array
   */
  const next = () => {
    setImageIndex((state) => (state += 1));
    if (imageIndex === array.length - 1) {
      setImageIndex(0);
    }
  };
  /**
   * Function that traverses the image array in reverse
   */
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
  );
};

export default DetailsGallery;
