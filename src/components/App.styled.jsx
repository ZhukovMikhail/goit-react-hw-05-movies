import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  margin: 20px;
  &.active {
    color: red;
    font-weight: 700;
  }
`;
