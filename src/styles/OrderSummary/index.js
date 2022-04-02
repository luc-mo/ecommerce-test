import styled from 'styled-components';
import * as S from 'styles';

export const Footer = styled.footer`
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const P = styled(S.P)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CartButton = styled(S.GreenButton)`
  height: 40px;
  width: 100%;
  font-size: 16px;
  letter-spacing: 2px;
`;