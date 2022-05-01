import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as Api from 'service/api';

export const Movies = () => {
  const [movies, setMovies] = useState();
  const [query, setQuery] = useState('');
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
    if (query === '') {
      return;
    }
    Api.searchMovie(query)
      .then(r => {
        setMovies(r);
      })
      .catch(e => console.log(e));
  }, [query]);
  console.log('Movies-location:', location);
  console.log('Movies-params:', params.get('query'));

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="movie" />
        <button type="submit">Search Movie</button>
      </form>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
