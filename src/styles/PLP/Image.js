import styled from 'styled-components';
import * as S from 'styles';

export const ImgContainer = styled.div`
  ${S.CenterFlex}
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  aspect-ratio: 1;
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