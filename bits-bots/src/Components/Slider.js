import React, { useState } from "react";
import { Link } from "react-router-dom";
import chevronRight from "../images/chevron_right.svg";
import chevronLeft from "../images/chevron_left.svg"
import * as styled from "./Slider.styles.js";

const Slider = (children) => {
    const [imageIndex, setImageIndex] = useState(0);
    let data = children.productOnSale.map((product) => {
        if(product.on_sale === true) {
          return (
                <styled.Image src={product.images[0].src} alt={product.images[0].src} />
          )
        }
      })

    let id = children.productOnSale.map((id) => {
        return(
            <styled.Title>Titles on sale: {id.name}</styled.Title>
        )
    })

    console.log(id)

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

    console.log(data);
    return (
        <styled.Container>
                 {id[imageIndex]}
                 <Link to={`${id[imageIndex]}`}>
                    {data[imageIndex]}
                 </Link>
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