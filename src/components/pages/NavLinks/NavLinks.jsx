import { StyledNavLink } from 'components/App.styled';
import { Outlet } from 'react-router-dom';
export const Navlinks = () => {
  return (
    <div>
      <StyledNavLink to="/" style={{ textDecoration: 'none' }}>
        Home
      </StyledNavLink>
      <StyledNavLink to="movies" style={{ textDecoration: 'none' }}>
        Movies
      </StyledNavLink>
      <Outlet />
    </div>
  );
};
