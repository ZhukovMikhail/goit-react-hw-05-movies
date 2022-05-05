import styled from '@emotion/styled';

export const Form = styled.form`
  position: fixed;
  top: 1vw;

  display: flex;
  justify-content: center;
  z-index: 3;
  transition: 300ms;
  &:hover,
  :focus {
    transform: scale(1.1);
  }
`;

export const Input = styled.input`
  font-size: 1.8vw;
  border: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: #f7f3ee;
  color: #4848a3;
  ::placeholder {
    color: rgba(72, 72, 163, 0.5);
    font-style: italic;
  }
`;
export const Button = styled.button`
  font-size: 1.8vw;
  /* margin-left: 1vw; */
  border: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #8787e7;
  color: wheat;
  transition: 300ms;
  &:hover,
  :focus {
    color: #ffffff;
  }
`;

export const Layout = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url('https://materials.basov.com.ua/images/silhouette-map-of-ukraine-vector-illustration-blue-yellow.jpg');
  background-size: contain;
  display: flex;
  justify-content: center;
  & h3 {
    align-self: center;
    color: white;
  }
`;
