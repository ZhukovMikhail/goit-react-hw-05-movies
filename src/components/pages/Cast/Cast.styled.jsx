import styled from '@emotion/styled';
export const Container = styled.div`
  margin: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CastGallery = styled.ul`
  margin-left: -10px;
  margin-top: -10px;
  display: flex;
  flex-wrap: wrap;
`;
export const Actor = styled.li`
  margin-left: 10px;
  margin-top: 10px;
  list-style: none;
  flex-basis: calc((100%-50px) / 5);
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 190px;
  box-shadow: 4px 5px 6px 0px rgba(54, 51, 51, 0.9);
  -webkit-box-shadow: 4px 5px 6px 0px rgba(27, 22, 22, 0.9);
  -moz-box-shadow: 4px 5px 6px 0px rgba(26, 26, 26, 0.9); ;
`;
export const PhotoBox = styled.div`
  display: flex;
  height: 100%;
`;
export const Photo = styled.img`
  display: block;
  max-width: 100%;
  align-self: center;
`;

export const Name = styled.h5`
  text-align: center;
  height: 3vw;
  font-size: 1.5vw;
  align-self: center;
`;
