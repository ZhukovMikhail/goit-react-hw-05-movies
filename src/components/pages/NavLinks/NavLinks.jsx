import { StyledNavLink } from 'components/App.styled';
import { Outlet } from 'react-router-dom';
export const Navlinks = () => {
  return (
    <div>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="movies">Movies</StyledNavLink>
      <Outlet />
    </div>
  );
};
