import {
  Container,
  Gallery,
  GalleryItem,
  ImgContainer,
  Image,
  MovieTitle,
  TittleBox,
  Span,
  SpanBox,
  Rate,
  Linky,
} from './Movies.styled';

import * as Api from 'service/api';
export const MovieGalley = ({ movies, location, to = '' }) => {
  return (
    <Container>
      <Gallery>
        {movies.map(movie => (
          <GalleryItem key={movie.id} tabIndex={0}>
            <Linky to={`${to}${movie.id}`} state={{ from: location }}>
              <ImgContainer>
                <Image
                  src={
                    movie.poster_path
                      ? `${Api.IMG_BASE_URL}${Api.IMG_ORIG}${movie.poster_path}`
                      : 'https://planbphoto.com/wp-content/uploads/Serze.jpg'
                    // '/src/utils/map.jpg'
                  }
                  alt={movie.title}
                />
              </ImgContainer>
              <TittleBox>
                <MovieTitle>{movie.title}</MovieTitle>
                <SpanBox>
                  <Span>{movie?.release_date?.slice(0, 4)}</Span>
                  <Rate>Rate: {movie.vote_average}</Rate>
                </SpanBox>
              </TittleBox>
            </Linky>
          </GalleryItem>
        ))}
      </Gallery>
    </Container>
  );
};
