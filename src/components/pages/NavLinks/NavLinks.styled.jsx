import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  margin-left: 7vw;
  font-size: 2.5vw;
  color: wheat;
  transition: 300ms;
  transform: scale(0.75);

  &:hover,
  :focus {
    transform: scale(0.9);
  }
  &.active {
    color: #ffffff;
    /* text-shadow: 2px 2px 5px rgba(0, 0, 0, 1); */
    transform: scale(1.2);
  }
`;

export const LinkBox = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  height: 4vw;

  background-color: rgb(89, 87, 205);
  z-index: 2;

  box-shadow: 4px 5px 6px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 4px 5px 6px 0px rgba(32, 26, 26, 0.75);
  -moz-box-shadow: 4px 5px 6px 0px rgba(64, 63, 63, 0.75); ;
`;
