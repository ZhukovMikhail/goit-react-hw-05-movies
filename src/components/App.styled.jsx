import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #010101;
`;

export const StyledNavLink = styled(NavLink)`
  margin: 20px;
  &.active {
    color: red;
    font-weight: 700;
  }
`;
