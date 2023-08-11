import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import chevronRight from '../images/chevron_right.svg';
import chevronLeft from '../images/chevron_left.svg';
import * as styled from './Slider.styles.js';

/**
 * Gallery component that takes
 * @param {array} children of objects and
 * @returns a gallery
 */
const Slider = (children) => {
  /**
   * Initializes the gallery array
   */
  const [imageIndex, setImageIndex] = useState(0);
  /**
   * Initializes the array of images and returns image objects
   */
  let data = children.productOnSale.map((product) => {
    if (product.on_sale === true) {
      return (
        <styled.Image src={product.images[0].src} alt={product.images[0].src} />
      );
    } else {
      return null;
    }
  });
  /**
   * Initializes and array of names and returns the name of each image object
   */
  let id = children.productOnSale.map((id) => {
    return <styled.Title>Titles on sale: {id.name}</styled.Title>;
  });
  /**
   * Initializes an array of IDs of the image objects
   */
  let route = children.productOnSale.map((id) => {
    return id.id;
  });
  /**
   * Click functions that traverses the image array
   */
  const next = () => {
    setImageIndex((state) => (state += 1));
    if (imageIndex === data.length - 1) {
      setImageIndex(0);
    }
  };
  /**
   * Click function that traverses the image array in reverse
   */
  const previous = () => {
    setImageIndex((state) => (state -= 1));
    if (imageIndex === 0) {
      setImageIndex(data.length - 1);
    }
  };
  return (
    <styled.Container>
      {id[imageIndex]}
      <Link to={`${route[imageIndex]}`}>{data[imageIndex]}</Link>
      <styled.NavButton right onClick={next}>
        <img src={chevronRight} alt="right arrow" />
      </styled.NavButton>
      <styled.NavButton onClick={previous}>
        <img src={chevronLeft} alt="left arrow" />
      </styled.NavButton>
    </styled.Container>
  );
};

export default Slider;
