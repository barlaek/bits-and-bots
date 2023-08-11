import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 720px) {
    max-width: 720px;
    flex-direction: row-reverse;
    margin: 0 auto;
  }

  @media (min-width: 1100px) {
  }
`;
