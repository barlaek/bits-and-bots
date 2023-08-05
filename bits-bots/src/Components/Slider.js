import React, { useState } from "react";
import { Link } from "react-router-dom";
import chevronRight from "../images/chevron_right.svg";
import chevronLeft from "../images/chevron_left.svg"
import * as styled from "./Slider.styles.js";
import Loading from "./Loading";
import { useApi } from "../Utilities/Hooks/useApi";
import { productUrl } from "../Utilities/Constants/endpoints";

// function Slider() {
//     const { data, loading, error } = useApi(`${productUrl}`);
//     const [ imageIndex, setImageIndex] = useState(0);

//     const isOnSale = data.map((product) => {
//         if(product.on_sale === true) {
//             return product.images[0];
//         } else if(!product) {
//             return <div key={error}>Error</div>
//         } else {
//             return <Loading key={loading} />
//         }
//     }) 

//     console.log(isOnSale);

//     const next = () => {
//         setImageIndex((state) => (state += 1));
//         if(imageIndex === data.length -1){
//             setImageIndex(0);
//         };
//     };

//     const previous = () => {
//         setImageIndex((state => state -= 1));
//         if(imageIndex === 0) {
//             setImageIndex(0);
//         };
//     };
//     return (
//         <styled.Container>
//            <Link to="">
//                  <styled.Title>Titles on sale: </styled.Title>
//                  <styled.Image src="" alt="" />
//                  <styled.NavButton right onClick={next}>
//                      <img src={chevronRight} alt="right arrow"/>
//                  </styled.NavButton>
//                  <styled.NavButton onClick={previous}>
//                      <img src={chevronLeft} alt="left arrow"/>
//                  </styled.NavButton>
//              </Link>
//         </styled.Container>
//     )
// }

// export default Slider;

const Slider = (children) => {
    const [imageIndex, setImageIndex] = useState(0);
    let data = children.productOnSale.map((product) => {
        if(product.on_sale === true) {
          return (
                // <styled.Image src={product.images[imageIndex].src} alt={product.images[imageIndex].src} />
                <styled.Image src={product.images[0].src} alt={product.images[0].src} />
          )
        }
      })

    let id = children.productOnSale.map((id) => {
        // return {
        //     id: id.id,
        //     name: id.name,
        // }
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