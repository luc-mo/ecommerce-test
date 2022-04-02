import styled from 'styled-components';
import * as S from 'styles';

export const CartCounter = styled.div`
  ${S.CenterFlex}
  ${S.SelectedColors}
  width: 26px;
  height: 26px;
  padding: 8px;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  position: absolute;
  right: 14px;
  top: 14px;
  border-radius: 100%;
  animation: scaleUp 0.6s ease-in-out;
`;