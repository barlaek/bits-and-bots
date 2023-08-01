import styled, { css } from "styled-components";

export const Container = styled.div`
    width: 350px;
    height: 150px;
    postion: relative;
`;

export const ImageContainer = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

// export const NavButton = styled.button`
//     width: 35px;
//     height: 35px;
//     outline: none;
//     border: none;
//     background: none;
//     cursor: pointer;
//     padding: 0;
//     position: absolute;
//     top: 50%;
//     border-radius: 50%;
//     color: white;
//     box-shadow: 0px 4px 60px 20px rgba(3,3,3,0.9), inset 0 --3em 3em rgba(3,3,3,0.5);
//     transform: translate(0, -50%);
//     ${(props) => props.right === true ? css` right: 2%` : css`left: 2%`}
// `;