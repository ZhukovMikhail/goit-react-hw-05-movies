import * as Api from 'service/api';
import { useOutletContext } from 'react-router-dom';
import {
  ActorBox,
  Container,
  CastGallery,
  Actor,
  Photo,
  Name,
} from './Cast.styled';
export const Cast = () => {
  const movie = useOutletContext();
  return (
    <Container>
      <CastGallery>
        {movie.credits.cast.map(a => (
          <Actor key={a.id}>
            <ActorBox>
              <Photo
                src={`${Api.IMG_BASE_URL}${Api.IMG_W200}${a.profile_path}`}
                alt={a.name}
              />
              <Name>{a.name}</Name>
            </ActorBox>
          </Actor>
        ))}
      </CastGallery>
    </Container>
  );
};
