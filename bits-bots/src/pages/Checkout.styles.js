import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
`;

export const CartContainer = styled.div`
    width: 350px;
    background-color: #383838;
    margin: 0 auto;
    color: white;
    border-radius: 5px;
`;

export const CartInfo = styled.button`
    font-weight: bold;
    background-color: #383838;
    border: none;
    margin: 10px;
    color: white;
    cursor: pointer
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    background-color: #383838;
    margin: 15px auto;
    color: white;
    border-radius: 5px;
`;

export const Details = styled.h3`
    margin: 15px auto;
`;