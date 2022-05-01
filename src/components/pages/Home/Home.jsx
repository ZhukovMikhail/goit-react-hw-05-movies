import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as Api from 'service/api';

export const Home = () => {
  const [movies, setMovies] = useState();
  //   const [error, setError] = useState(null);

  useEffect(() => {
    Api.trendingMovie()
      .then(r => {
        setMovies(r);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <>
      <h2>Tranding movies</h2>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
