import { useState, useEffect } from 'react';
import { useParams, Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  MovieBox,
  MovieInfo,
  Container,
  LinkBox,
  Linky,
  ImgContainer,
  Image,
  AddInfo,
  Sp,
  Button,
} from './MoviePage.styled';
import * as Api from 'service/api';

const MoviePage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setError(null);
    Api.movieDetails(movieId)
      .then(r => {
        setMovie(r);
      })
      .catch(e => {
        setError(e.message);
        navigate(`/*`);
      });
  }, [movieId, navigate]);

  const onBack = e => {
    location.state !== null
      ? navigate(`${location.state.from.pathname}${location.state.from.search}`)
      : navigate(`/main`);
  };

  return (
    <Container
      path={`${Api.IMG_BASE_URL}${Api.IMG_ORIG}${movie && movie.backdrop_path}`}
    >
      {error && (
        <h3 style={{ textAlign: 'center' }}>{`...sorry ${error} occured`}</h3>
      )}

      <Button onClick={onBack} />

      {movie && (
        <div>
          <MovieBox>
            <ImgContainer>
              <Image
                src={`${Api.IMG_BASE_URL}${Api.IMG_W500}${movie.poster_path}`}
                alt={movie.title}
              />
            </ImgContainer>
            <MovieInfo>
              <h3>{movie.title}</h3>
              <Sp>{movie.tagline}</Sp>
              <h4>Overview</h4>
              <span>{movie.overview}</span>
              <h4>Genres</h4>
              {movie.genres.map(g => (
                <span key={g.id}>{g.name}</span>
              ))}
            </MovieInfo>
          </MovieBox>
          <AddInfo>Additional information</AddInfo>
          <LinkBox>
            <Linky
              style={{ textDecoration: 'none' }}
              to={`cast`}
              state={location.state && { from: location.state.from }}
            >
              Cast
            </Linky>
            <Linky
              style={{ textDecoration: 'none' }}
              to={`reviews`}
              state={location.state && { from: location.state.from }}
            >
              Reviews
            </Linky>
          </LinkBox>

          <Outlet context={movie} />
        </div>
      )}
    </Container>
  );
};

export default MoviePage;
