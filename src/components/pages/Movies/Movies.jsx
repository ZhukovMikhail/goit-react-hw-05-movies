import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as Api from 'service/api';

export const Movies = () => {
  const [movies, setMovies] = useState();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  let location = useLocation();

  const onSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.movie;
    setQuery(value);
    location = {
      pathname: `/movies`,
      search: `?query=${value}`,
    };
    // navigate(location.search, { state: { from: location } });
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
              <Link to={`${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
