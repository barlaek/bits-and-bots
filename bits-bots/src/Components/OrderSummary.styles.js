import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  background-color: #383838;
  border-radius: 5px;
  margin: 5px auto;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Summary = styled.h2`
  font-size: 20px;
  margin: 10px auto;
`;

export const LineBox = styled.div`
  width: 300px;
  margin: 0 auto;
`;

export const Line = styled.hr`
  border-bottom: 1px solid white;
`;

export const TotalBox = styled.div`
  margin: 0 auto;
`;

export const Total = styled.h3``;

export const CheckoutBox = styled.div`
  margin: 0 auto 15px;
`;

export const CheckoutBtn = styled.button`
  background-color: #01f9c6;
  color: #121212;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  padding: 10px 120px;
  cursor: pointer;
`;
