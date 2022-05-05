import styled from '@emotion/styled';

export const Integer = styled.div`
  border-radius: 5px;
  width: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2vw;
  margin-right: 2vw;
  background-color: transparent;
  color: wheat;
  box-shadow: 0px 2px 4px 6px rgba(255, 255, 255, 0.5);
  -webkit-box-shadow: 0px 2px 4px 6px rgba(255, 255, 255, 0.5);
  -moz-box-shadow: 0px 2px 4px 6px rgba(255, 255, 255, 0.5);
  font-weight: 700;
  font-size: 2vw;
`;

export const Button = styled.button`
  display: flex;
  border: none;

  justify-content: center;
  align-items: center;
  font-size: 2vw;
  border-radius: 5px;
  border: none;
  transition: 300ms;
  color: wheat;
  background-color: transparent;

  &:hover,
  :focus {
    transform: scale(1.2);
    color: white;
    box-shadow: 0px 2px 4px 6px rgba(255, 255, 255, 0.5);
    -webkit-box-shadow: 0px 2px 4px 6px rgba(255, 255, 255, 0.5);
    -moz-box-shadow: 0px 2px 4px 6px rgba(255, 255, 255, 0.5);
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;
