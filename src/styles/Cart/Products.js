import styled from 'styled-components';
import * as S from 'styles';

export const Li = styled.li`
  ${S.CenterFlex}
  justify-content: space-between;
  width: 100%;
  padding: 26px 0;
  gap: 20px;
  border-bottom: 1px solid #cccccc;
  &:first-child {
    border-top: 1px solid #cccccc;
  }
`;