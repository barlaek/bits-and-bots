import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 4px solid #121212;
  border-right: 4px solid #121212;
  border-bottom: 4px solid #121212;
  border-left: 4px solid #01F9C6;
  background: transparent;
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

export default Spinner;