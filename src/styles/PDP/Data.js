import styled from 'styled-components';
import * as S from 'styles';

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