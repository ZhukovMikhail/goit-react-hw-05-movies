import styled from '@emotion/styled';
import * as Api from 'service/api';

export const Container = styled.div`
  /* width: 100vw; */
  /* height: 100vh; */
  background-image: linear-gradient(
      rgba(11, 16, 36, 0.904),
      rgba(61, 61, 61, 0.4)
    ),
    url(${props => Api.moviesIndx(props.movies, props.index)});
  /* background-size: auto; */
  background-repeat: repeat;
  background-attachment: fixed;
  & h2 {
    color: wheat;
    text-align: center;
  }
`;
export const Box = styled.div`
  display: flex;
  justify-content: center;
`;

export const Select = styled.select`
  position: fixed;
  top: 1vw;
  border-radius: 4px;
  border: none;
  font-size: 1.8vw;
  color: #3636b3;
  z-index: 3;
  transition: 300ms;
  &:hover,
  :focus {
    fill: #ffffff;
    transform: scale(1.1);
  }
`;
