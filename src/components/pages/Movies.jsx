import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Api from 'service/api';

export const Movies = () => {
  const [movies, setMovies] = useState();
  const [query, setQuery] = useState('');

  //   const {url} = useRouteMatch();

  const onSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.movie;
    console.log(e.target.elements.movie.value);
    setQuery(value);
  };
  useEffect(() => {
    if (query === '') {
      return;
    }
    Api.searchMovie(query)
      .then(r => {
        setMovies(r);
        console.log(r);
      })
      .catch(e => console.log(e));
  }, [query]);

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
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
