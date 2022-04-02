import styled from 'styled-components';
import * as S from 'components/styles';

export const H3 = styled(S.H3)`
  margin-bottom: 6px;
`;

export const P = styled(S.P)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ProductsList = styled.ul`
  list-style: none;
`;

export const Product = styled.li`
  padding: 12px 0;
  border-bottom: 1px solid #cccccc;
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    border-bottom: none;
  }
`;

export const Footer = styled.footer`
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const CartButton = styled(S.GreenButton)`
  height: 40px;
  width: 100%;
  font-size: 16px;
  letter-spacing: 2px;
`;