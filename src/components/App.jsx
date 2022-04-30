import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { StyledNavLink } from './App.styled';
import { Movies } from './pages/Movies';
import { MoviePage } from './pages/MoviePage/MoviePage';
import { Cast } from './pages/Cast/Cast';
import { Reviews } from './pages/Reviews/Reviews';
import { useState } from 'react';

export const App = () => {
  const [movie, setMovie] = useState();
  return (
    <>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="movies">Movies</StyledNavLink>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="movies/:movieId" element={<MoviePage movie={setMovie} />}>
          <Route path="cast" element={<Cast movie={movie} />} />
          <Route path="reviews" element={<Reviews movie={movie} />} />
        </Route>
      </Routes>
    </>
  );
};
