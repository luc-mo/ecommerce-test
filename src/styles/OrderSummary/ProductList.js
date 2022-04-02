import styled from 'styled-components';
import * as S from 'styles';

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

export const H3 = styled(S.H3)`
  margin-bottom: 6px;
`;