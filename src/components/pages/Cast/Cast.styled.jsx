import styled from '@emotion/styled';
export const Container = styled.div`
  margin: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CastGallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
export const Actor = styled.li`
  margin-left: 10px;
  margin-top: 10px;
  list-style: none;
`;
export const Photo = styled.img`
  display: block;
  min-width: 100%;
`;
export const Name = styled.h5``;

export const ActorBox = styled.div`
  background-image: linear-gradient(
    rgba(11, 16, 36, 0.904),
    rgba(61, 61, 61, 0.4)
  );
  border-radius: 5px;
  overflow: hidden;
  min-width: 13vw;
  min-height: 21vw;
`;
