import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Navlinks } from './pages/NavLinks/NavLinks';
import { Container } from './App.styled';
import { useEffect, lazy, Suspense } from 'react';
// import Home from './pages/Home/Home';
// import Movies from './pages/Movies/Movies';
// import MoviePage from './pages/MoviePage/MoviePage';
// import Cast from './pages/Cast/Cast';
// import Reviews from './pages/Reviews/Reviews';
// import NotFound from './pages/NotFound/NotFound';
import * as Notify from '../utils/util';
import { Loader } from './elements/Loading/Loading';

const Home = lazy(() =>
  import('./pages/Home/Home' /* webpackChunkName: "main-page" */)
);
const Movies = lazy(() =>
  import('./pages/Movies/Movies' /* webpackChunkName: "movies-page" */)
);
const MoviePage = lazy(() =>
  import(
    './pages/MoviePage/MoviePage' /* webpackChunkName: "movieDetails-page" */
  )
);
const Cast = lazy(() =>
  import('./pages/Cast/Cast' /* webpackChunkName: "cast-page" */)
);
const Reviews = lazy(() =>
  import('./pages/Reviews/Reviews' /* webpackChunkName: "reviews-page" */)
);
const NotFound = lazy(() =>
  import('./pages/NotFound/NotFound' /* webpackChunkName: "notFound-page" */)
);

export const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      Notify.redirectNotify();
      navigate('/main');
    }
  }, [location.pathname, navigate]);

  return (
    <Container>
      <Navlinks />
      <Routes>
        <Route
          path="/main"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="movies"
          element={
            <Suspense fallback={<Loader />}>
              <Movies />
            </Suspense>
          }
        />
        <Route
          path="movies/:movieId"
          element={
            <Suspense fallback={<Loader />}>
              <MoviePage />
            </Suspense>
          }
        >
          <Route
            path="cast"
            element={
              <Suspense fallback={<Loader />}>
                <Cast />
              </Suspense>
            }
          />
          <Route
            path="reviews"
            element={
              <Suspense fallback={<Loader />}>
                <Reviews />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<Loader />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </Container>
  );
};
