import { StyledNavLink, LinkBox } from './NavLinks.styled';

export const Navlinks = () => {
  return (
    <LinkBox>
      <StyledNavLink to="/main" style={{ textDecoration: 'none' }}>
        Home
      </StyledNavLink>
      <StyledNavLink to="movies" style={{ textDecoration: 'none' }}>
        Movies
      </StyledNavLink>
    </LinkBox>
  );
};
