import styled, { css } from 'styled-components';

export const Container = styled.div`
    min-width: 350px;
    min-height: 150px;
    max-width: 350px;
    min-height: 150px;
    position relative;
    display: flex;
    margin: 10px auto 0 auto;
    overflow: hidden;
    @media (min-width: 720px) {
      min-width: 720px;
    }
  
    @media (min-width: 1100px) {
      min-width: 1100px;
    }
`;

export const Image = styled.img`
  width: 350px;
  height: 100%;
  transition: left 1s;
  border-radius: 5px;
  @media (min-width: 720px) {
    width: 720px;
    height: 450px;
  }

  @media (min-width: 1100px) {
    width: 1100px;
    height: 600px;
  }
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
  top: 220px;
  border-radius: 50%;
  color: white;
  box-shadow:
    0px 4px 60px 20px rgba(3, 3, 3, 0.9),
    inset 0 --3em 3em rgba(3, 3, 3, 0.5);
  transform: translate(0, -50%);

  ${(props) =>
    props.right === true
      ? css`
          right: 2%;
        `
      : css`
          left: 2%;
        `}

  @media (min-width: 720px) {
    top: 300px
  }
      
  @media (min-width: 1100px) {
    top: 400px;
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  color: #fff;
  position: absolute;
  top: 280px;
  background-color: #ff6b87;
  padding: 7px 20px;
  left: 2%;
  @media (min-width: 720px) {
    top: 450px;
    left: 3%;
  }

  @media (min-width: 1100px) {
    top: 550px;
    left: 20%;
  }
`;
