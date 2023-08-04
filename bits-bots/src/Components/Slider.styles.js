import styled, { css } from "styled-components";


export const Container = styled.div`
    min-width: 350px;
    min-height: 150px;
    max-width: 350px;
    min-height: 150px;
    position relative;
    display: flex;
    margin: 10px auto 0 auto;
    overflow: hidden;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    transition: left 1s;
    border-radius: 5px;
`;

export const NavButton = styled.button`
    width: 35px;
    height: 35px;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    position: absolute;
    top: 33%;
    border-radius: 50%;
    color: white;
    box-shadow: 0px 4px 60px 20px rgba(3,3,3,0.9), inset 0 --3em 3em rgba(3,3,3,0.5);
    transform: translate(0, -50%);
    ${(props) => props.right === true ? css` right: 2%` : css`left: 2%`}
`;