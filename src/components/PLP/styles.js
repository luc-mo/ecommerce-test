import styled from 'styled-components';
import * as S from 'components/styles';

export const Product = styled.article`
  position: relative;
  background-color: #fff;
  height: 100%;
  max-width: 390px;
  border-radius: 4px;
  opacity: ${props => props.inStock ? 1 : 0.4};
  transition: box-shadow 0.3s linear;
  &:hover {
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

export const ImgContainer = styled.div`
  ${S.CenterFlex}
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  aspect-ratio: 1;
`;

export const Data = styled.div`
  position: relative;
  padding: 30px;
  width: 100%;
  height: 100%;
`;

export const H1 = styled(S.H1)`
  margin-bottom: 26px;
`;

export const Price = styled(S.P)`
  margin-top: 10px;
`;

export const OutOfStock = styled(S.P)`
  ${S.CenterFlex}
  ${props => props.inStock && 'display: none'};
  position: absolute;
  background-color: transparent;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

export const CartButton = styled(S.GreenButton)`
  ${props => !props.inStock && 'display: none'};
  position: absolute;
  width: 50px;
  height: 50px;
  right: 30px;
  bottom: 110px;
  padding: 12px;
  padding-right: 14px;
  border-radius: 50%;
  opacity: ${props => props.visible ? '1' : '0'};
  transition: opacity 0.3s linear;
`;