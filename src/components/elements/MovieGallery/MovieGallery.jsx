import { Link } from 'react-router-dom';
import {
  Container,
  Gallery,
  GalleryItem,
  ImgContainer,
  Image,
  MovieTitle,
  FilmBox,
  TittleBox,
  Span,
  SpanBox,
  Rate,
} from './Movies.styled';
import * as Api from 'service/api';
export const MovieGalley = ({ movies, location, to = '' }) => {
  return (
    <Container>
      <Gallery>
        {movies.map(movie => (
          <GalleryItem key={movie.id}>
            <Link
              to={`${to}${movie.id}`}
              state={{ from: location }}
              style={{ textDecoration: 'none' }}
            >
              <FilmBox>
                <ImgContainer>
                  <Image
                    src={`${Api.IMG_BASE_URL}${Api.IMG_ORIG}${movie.poster_path}`}
                    alt={movie.title}
                  />
                </ImgContainer>
                <TittleBox>
                  <MovieTitle>{movie.title}</MovieTitle>
                  <SpanBox>
                    <Span>{movie.release_date.slice(0, 4)}</Span>
                    <Rate>Rate: {movie.vote_average}</Rate>
                  </SpanBox>
                </TittleBox>
              </FilmBox>
            </Link>
          </GalleryItem>
        ))}
      </Gallery>
    </Container>
  );
};
