import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  background-color: #383838;
  border-radius: 5px;
  margin: 10px auto;
  padding: 10px 0;
  @media (min-width: 1100px) {
    width: 720px;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  color: white;
  margin: 5px 10px;
`;

export const Message = styled.h3`
  color: white;
  margin: 5px 10px;
`;
