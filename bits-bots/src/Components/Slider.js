import React, { useState } from "react";
import { Link } from "react-router-dom";
import chevronRight from "../images/chevron_right.svg";
import chevronLeft from "../images/chevron_left.svg"
import * as styled from "./Slider.styles.js";

const Slider = (children) => {
    const [imageIndex, setImageIndex] = useState(0);
    let data = children.productOnSale.map((product) => {
        if(product.on_sale === true) {
          return product.images[0];
        }
      })

    let id = children.productOnSale.map((id) => {
        return id.id;
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
            {/* <Link to={`${id[imageIndex]}`}> */}
                <styled.Title>Titles on sale:</styled.Title>
                <styled.Image src="" alt="" />
                <styled.NavButton right onClick={next}>
                    <img src={chevronRight} alt="right arrow"/>
                </styled.NavButton>
                <styled.NavButton onClick={previous}>
                    <img src={chevronLeft} alt="left arrow"/>
                </styled.NavButton>
            {/* </Link> */}
        </styled.Container>
    )
}

export default Slider;