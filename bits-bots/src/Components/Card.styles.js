import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  max-width: 720px;
  margin: 0 auto;
  @media (min-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1100px) {
    max-width: 1100px;
    grid-template-columns: repeat(3, 1fr)
  }
`;

export const Card = styled.div`
  color: #ffffff;
  background-color: #383838;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  min-wdith: 350px;
  max-width: 350px;
  min-height: 150px;
  max-height: 150px;
  border: 1px solid #383838;
  border-radius: 5px;
  margin: 15px auto;
`;

export const GameImage = styled.img`
  width: 116px;
  height: 130px;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  height: 170px;
`;
