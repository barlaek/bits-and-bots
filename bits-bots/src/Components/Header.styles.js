import styled from 'styled-components';

export const Container = styled.div`
  background-color: #383838;
  height: 75px;
`;

export const Header = styled.header`
  display: flex;
  margin: 0 auto;
  width: 350px;
  height: 75px;
`;

export const HomeBtn = styled.button`
  display: flex;
  align-items: center;
  background-color: #383838;
  border: none;
  cursor: pointer;
`;

export const LogoBtn = styled.img`
  height: 65px;
  border: 1px solid #01F9C6;
  border-radius: 5px;
  margin: auto;
  cursor: pointer;
`;

export const Ul = styled.ul`
  // display: flex;
  // align-items: center;
  display: inline-block;
  list-style-type: none;
  margin-left: 40%;
  margin-top: 7%
`;

export const Li = styled.li`
  display: inline-block;
  margin: 0 5px;
  position: relative;
  cursor: pointer;
`;
