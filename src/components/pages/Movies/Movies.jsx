import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Api from 'service/api';
import { MovieGalley } from 'components/elements/MovieGallery/MovieGallery';

export const Movies = () => {
  const [movies, setMovies] = useState();
  const [query, setQuery] = useState('');
  const [error, setError] = useState();
  const navigate = useNavigate();
  let location = useLocation();
  let params = new URLSearchParams(location.search);

  query === '' && params.get('query') !== null && setQuery(params.get('query'));

  const onSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.movie;
    setQuery(value);
    location = {
      pathname: `/movies`,
      search: `?query=${value}`,
    };
    navigate(location.search);
  };

  useEffect(() => {
    setError(null);
    if (query === '') {
      return;
    }
    Api.searchMovie(query)
      .then(r => {
        setMovies(r);
      })
      .catch(e => setError(e.message));
  }, [query]);
  console.log('Movies-location:', location);
  console.log('Movies-params:', params.get('query'));

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="movie" />
        <button type="submit">Search Movie</button>
      </form>
      {error && <h3>{`...sorry ${error} occured`}</h3>}
      {movies && <MovieGalley movies={movies} location={location} />}
    </>
  );
};
