import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MovieGalley } from 'components/elements/MovieGallery/MovieGallery';
import * as Api from 'service/api';

export const Home = () => {
  const [movies, setMovies] = useState();
  const location = useLocation();
  const [error, setError] = useState();

  useEffect(() => {
    setError(null);
    Api.trendingMovie()
      .then(r => {
        setMovies(r);
      })
      .catch(e => setError(e.message));
  }, []);
  return (
    <>
      {error ? (
        <h3>{`...sorry ${error} occured`}</h3>
      ) : (
        <h2>Tranding movies</h2>
      )}
      {movies && (
        <MovieGalley movies={movies} location={location} to={'movies/'} />
      )}
    </>
  );
};
