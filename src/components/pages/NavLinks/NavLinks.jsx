import { StyledNavLink } from 'components/App.styled';
import { Outlet } from 'react-router-dom';
export const Navlinks = () => {
  return (
    <>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="movies">Movies</StyledNavLink>
      <Outlet />
    </>
  );
};
