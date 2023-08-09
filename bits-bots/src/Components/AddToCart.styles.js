import styled from 'styled-components';

export const Container = styled.div`
  background-color: #383838;
  width: 350px;
  margin: 5px auto;
  color: white;
  border-radius: 5px;
`;

export const Header = styled.h1`
    margin: 10px;
`;

export const PriceContainer = styled.div`
    display: flex;
    margin: 10px;
    gap: 10px;
`;

export const PriceDeclaration = styled.h2`
    margin: 0 0 10px 0;
`;

export const Price = styled.h2`
    color: #ff6b87;
    margin: 0 0 10px 0;
`;

export const BtnCont = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
`;

export const AddToCart = styled.button`
    color: #121212;
    background-color: #01F9C6;
    border: none;
    border-radius: 5px;
    padding: 10px 120px;
    margin: 0 10px 20px 10px;
    font-weight: bold;
`;