import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 1vw;
  margin-top: 20px;
  width: 98vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Gallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-top: -10px;
`;
export const GalleryItem = styled.li`
  margin-left: 10px;
  margin-top: 10px;
  list-style: none;
  flex-basis: calc((100% - 50px) / 5);
`;
export const ImgContainer = styled.div`
  min-height: 28.5vw;
`;
export const Image = styled.img`
  display: block;
  max-width: 100%;
  overflow: hidden;
`;

export const FilmBox = styled.div`
  position: relative;
  width: 100%;
  height: 34vw;
  background-image: linear-gradient(
    rgba(121, 142, 230, 0.904),
    rgba(179, 179, 179, 0.4)
  );
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 4px 5px 6px 0px rgba(64, 63, 63, 0.75);
  -webkit-box-shadow: 4px 5px 6px 0px rgba(64, 63, 63, 0.75);
  -moz-box-shadow: 4px 5px 6px 0px rgba(64, 63, 63, 0.75); ;
`;
export const Span = styled.span`
  display: inline-block;
  font-size: 1.3vw;
  /* margin-left: 5.5vw; */
`;
export const SpanBox = styled.div`
  margin-top: 3px;
  display: flex;
  justify-content: space-around;
  font-size: 1.8vw;
`;
export const MovieTitle = styled.h5`
  margin-top: 5px;
  align-content: center;
  text-align: center;
  font-size: 1vw;
  text-decoration: none;
`;
export const TittleBox = styled.div`
  max-height: 6.5vw;
  display: flex;
  flex-direction: column;
  color: #110070;
`;

export const Rate = styled.span`
  position: absolute;
  bottom: 5px;
  right: 5px;
  display: inline-block;
  font-size: 1.3vw;
  text-decoration: none;
`;
