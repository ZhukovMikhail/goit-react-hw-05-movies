import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Navlinks } from './pages/NavLinks/NavLinks';
import { Movies } from './pages/Movies/Movies';
import { MoviePage } from './pages/MoviePage/MoviePage';
import { Cast } from './pages/Cast/Cast';
import { Reviews } from './pages/Reviews/Reviews';
import { NotFound } from './pages/NotFound/NotFound';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Navlinks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies/:movieId" element={<MoviePage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
