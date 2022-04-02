import styled from 'styled-components';
import * as S from 'styles';

export const Carousel = styled.section`
  ${S.CenterFlex}
  flex-direction: column;
  max-height: 590px;
  gap: 20px;
  animation:
    translateLeft 0.7s ease-in-out,
    fadeIn 0.7s linear;
`;

export const ArrowButton = styled.button`
  ${S.CenterFlex}
  background: none;
  padding: 8px;
  border-radius: 50%;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const GalleryImg = styled(S.Img)`
  width: 130px;
  height: 130px;
  border: ${props => props.center ?
    '5px solid #5ECE7B;' :
    '1px solid #aaa'
  };
`;