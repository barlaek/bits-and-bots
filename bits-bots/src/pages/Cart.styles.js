import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 1100px) {
        width: 720px;
        margin: 0 auto;
        flex-direction: row;
        justify-content: center;
    }
`;