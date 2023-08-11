import styled from "styled-components";

export const Wrapper = styled.div`
    min-height: 100vh;
`;

export const Container = styled.div`
    width: 350px;
    margin: 15px auto;
    background-color: #ff6b87;
    border-radius 5px;
    @media (min-width: 720px) {
        width: 720px;
    }
`;

export const Message = styled.h2`
    color: white;
    margin: 15px auto;
`;