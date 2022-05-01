import { useState, useEffect } from 'react';
import {
  Link,
  useParams,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { MovieBox, MovieInfo } from './MoviePage.styled';

import * as Api from 'service/api';

export const MoviePage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    Api.movieDetails(movieId).then(r => {
      setMovie(r);
    });
  }, [movieId]);
  const onBack = e => {
    navigate(`/movies`);
  };
  console.log('MoviePage-location:', location);
  // console.log('navigate:', navigate());
  return (
    <>
      <button style={{ display: 'flex' }} type="button" onClick={onBack}>
        Go Back
      </button>
      {movie && (
        <div>
          <MovieBox>
            <img
              src={`${Api.IMG_BASE_URL}${Api.IMG_W200}${movie.poster_path}`}
              alt={movie.title}
            />
            <MovieInfo>
              <h3>{movie.title}</h3>
              <p>{movie.tagline}</p>
              <h4>Overview</h4>
              <p>{movie.overview}</p>
              {/* <img
            src={`${Api.IMG_BASE_URL}${Api.IMG_ORIG}${movie.backdrop_path}`}
            alt={movie.title}
          /> */}
              <h4>Genres</h4>
              {movie.genres.map(g => (
                <span key={g.id}>{g.name}</span>
              ))}
            </MovieInfo>
          </MovieBox>
          <h4>Additional information</h4>

          <Link to={`cast`}>Cast</Link>
          <Link to={`reviews`}>Reviews</Link>
          <Outlet context={movie} />
        </div>
      )}
    </>
  );
};
