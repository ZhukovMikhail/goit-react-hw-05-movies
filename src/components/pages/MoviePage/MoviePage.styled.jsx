import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

export const Container = styled.div`
  background-image: linear-gradient(
      rgba(11, 16, 36, 0.904),
      rgba(61, 61, 61, 0.4)
    ),
    url(${props => props.path});
  background-size: cover;
  min-height: 95vh;
  color: wheat;
  width: 100vw;
  /* margin-bottom: 10px; */
  border-radius: 5px;
  overflow: hidden;
`;
export const MovieBox = styled.div`
  display: flex;
`;
export const MovieInfo = styled.div`
  margin: 20px;
  & h3 {
    text-align: center;
    margin-top: 20px;
    border-bottom: 1px solid wheat;
  }
  & h4 {
    text-align: center;
    border-bottom: 1px solid wheat;
    margin-top: 20px;
  }

  & span {
    display: inline-block;
    margin-top: 10px;
    margin-left: 15px;
  }
`;
export const Sp = styled.p`
  margin-top: 5px;
  text-align: center;
`;
export const LinkBox = styled.div`
  display: flex;
  color: wheat;
  justify-content: center;
`;
export const Linky = styled(Link)`
  display: block;
  color: wheat;
  margin-left: 20px;
`;
export const ImgContainer = styled.div`
  min-width: 22vw;
  overflow: hidden;
  border-radius: 2%;
  margin-left: 20px;
`;
export const Image = styled.img`
  display: block;
  width: 100%;
`;
export const AddInfo = styled.h4`
  margin: 10px;
  border-bottom: 1px solid wheat;
  text-align: center;
`;
export const Button = styled(BsFillArrowLeftCircleFill)`
  display: inline-block;
  position: fixed;
  top: 1.2vw;
  left: 0.8vw;
  width: 1.5vw;
  height: 1.5vw;
  z-index: 1000;
  border-radius: 50%;

  font-size: 1vw;
  border: none;
  fill: wheat;
  transition: 300ms;

  &:hover,
  :focus {
    fill: #ffffff;
    transform: scale(1.15);
  }
`;

// export const Button = styled(BsFillArrowLeftCircleFill)``;
