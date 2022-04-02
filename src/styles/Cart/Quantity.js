import styled from 'styled-components';
import * as S from 'styles';

export const Quantity = styled.div`
  ${S.CenterFlex}
  flex-direction: column;
  justify-content: space-between;
  height: 170px;
`;

export const QuantityButton = styled(S.WhiteButton)`
  width: 30px;
  height: 30px;
  font-size: 30px;
  &:last-child {
    padding-bottom: 3px;
  }
`;