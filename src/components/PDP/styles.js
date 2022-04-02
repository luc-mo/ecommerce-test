import styled from 'styled-components';
import * as S from 'components/styles';

export const Carousel = styled.section`
  ${S.CenterFlex}
  flex-direction: column;
  max-height: 590px;
  gap: 20px;
  animation:
    translateLeft 0.7s ease-in-out,
    fadeIn 0.7s linear;
`;

export const Data = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
  animation:
    translateRight 0.7s ease-in-out,
    fadeIn 0.7s linear;
`;

export const Price = styled.div`
  margin-bottom: 16px;
`;

export const Items = styled.div`
  display: flex;
  margin-top: 8px;
  margin-bottom: 16px;
`;

export const GalleryImg = styled.img`
  width: 130px;
  height: 130px;
  object-fit: contain;
  border: ${props => props.center ?
    '5px solid #5ECE7B;' :
    '1px solid #aaa'
  };
`;

export const Poster = styled.section`
  height: 590px;
  width: 600px;
  padding: 20px;
  background-color: #ffffff;
  animation:
    translateUp 0.7s ease-in-out,
    fadeIn 0.7s linear;
`;

export const CartButton = styled(S.GreenButton)`
  font-size: 20px;
  width: 270px;
  height: 70px;
  padding: 20px;
  border-radius: 2px;
  &:disabled {
    opacity: 0.5;
  }
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