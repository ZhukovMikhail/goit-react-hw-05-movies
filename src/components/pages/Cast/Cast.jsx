import * as Api from 'service/api';
import { useOutletContext } from 'react-router-dom';
import {
  Container,
  CastGallery,
  Actor,
  Photo,
  Name,
  PhotoBox,
} from './Cast.styled';
export const Cast = () => {
  const movie = useOutletContext();
  return (
    <Container>
      <CastGallery>
        {movie.credits.cast.map(a => (
          <Actor key={a.id}>
            <PhotoBox>
              <Photo
                src={
                  a.profile_path
                    ? `${Api.IMG_BASE_URL}${Api.IMG_W200}${a.profile_path}`
                    : 'https://planbphoto.com/wp-content/uploads/Serze.jpg'
                }
                alt={a.name}
              />
            </PhotoBox>
            <Name>{a.name}</Name>
          </Actor>
        ))}
      </CastGallery>
    </Container>
  );
};
