import styled from 'styled-components';
import * as S from 'styles';

export const ImgContainer = styled.div`
  position: relative;
  width: 250px;
  height: 100%;
  padding: 0 30px;
`;

export const Img = styled(S.Img)`
  padding: 10px;
  background-color: #ffffff;
`;

export const ArrowButton = styled.button`
  background: none;
  font-family: 'Raleway', sans-serif;
  font-size: 26px;
  font-weight: 500;
  position: absolute;
  top: 50%;
  left: 10px;
  border: none;
  cursor: pointer;
  transform: translateY(-50%);
  &:last-child {
    left: auto;
    right: 10px;
  }
`;