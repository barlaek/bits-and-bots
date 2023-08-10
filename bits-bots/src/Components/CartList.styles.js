import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Box = styled.div`
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

export const Image = styled.img`
  width: 116px;
  height: 130px;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  height: 170px;
`;

export const Header = styled.h3``;

export const Select = styled.select`
  width: 195px;
  color: white;
  background-color: #383838;
  padding: 5px 0;
  margin-top: 5px;
  border-radius: 3px;
  cursor: pointer;
`;

export const Remove = styled.button`
  background-color: #383838;
  color: white;
  border: none;
  text-decoration: underline;
  cursor: pointer;
  margin: 15px;
`;
