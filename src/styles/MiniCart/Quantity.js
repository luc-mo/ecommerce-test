import styled from 'styled-components';
import * as S from 'styles';

export const Quantity = styled.div`
  ${S.CenterFlex}
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 20%;
`;

export const QuantityButton = styled(S.WhiteButton)`
  width: 26px;
  height: 26px;
  font-size: 30px;
  &:last-child {
    padding-bottom: 3px;
  }
`;