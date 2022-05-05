import styled from '@emotion/styled';
import { n } from 'utils/util';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin: 1vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Gallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: calc((-10px * ${n}));
  margin-top: calc((-10px * ${n}));
`;
export const GalleryItem = styled.li`
  margin-left: calc((10px * ${n}));
  margin-top: calc((10px * ${n}));
  list-style: none;
  flex-basis: calc((100% - 50px * ${n}) / 5);

  position: relative;
  width: 100%;

  background-image: linear-gradient(
    rgba(121, 142, 230, 0.9),
    rgba(255, 255, 255, 0.6)
  );
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 4px 5px 6px 0px rgba(64, 63, 63, 0.75);
  -webkit-box-shadow: 4px 5px 6px 0px rgba(64, 63, 63, 0.75);
  -moz-box-shadow: 4px 5px 6px 0px rgba(64, 63, 63, 0.75);
  transition: 300ms;
  &:hover,
  :focus {
    transform: scale(1.04);
  }
`;
export const ImgContainer = styled.div`
  /* min-height: 28.5vw; */
`;
export const Image = styled.img`
  display: block;
  max-width: 100%;
  overflow: hidden;
`;

export const Span = styled.span`
  display: inline-block;
  font-size: 1.3vw;
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
  height: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #110070;
  padding-bottom: 5px;
`;

export const Rate = styled.span`
  position: absolute;
  top: 3px;
  right: 3px;
  display: inline-block;
  font-size: 1.3vw;
  background-color: #e2931b;
  border-radius: 1px;
  padding: 2px;
`;

export const Linky = styled(Link)`
  text-decoration: none;
`;
