import styled from 'styled-components';
import * as S from 'styles';

export const P = styled(S.P)`
  margin-bottom: 8px;
`;

export const Product = styled.li`
  position: relative;
  display: flex;
  padding: 20px;
`;

export const ProductSection = styled.section`
  width: 50%;
  &:last-of-type {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

export const Img = styled(S.Img)`
  height: 150px;
  width: 80%;
`;

export const DeleteButton = styled(S.DeleteButton)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
`;