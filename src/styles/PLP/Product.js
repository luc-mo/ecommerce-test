import styled from 'styled-components';
import * as S from 'styles';

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

export const Data = styled.div`
  position: relative;
  padding: 30px;
  width: 100%;
  height: 100%;
`;

export const Price = styled(S.P)`
  margin-top: 10px;
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