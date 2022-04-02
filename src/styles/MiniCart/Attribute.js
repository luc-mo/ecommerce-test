import styled, { css } from 'styled-components';
import * as S from 'styles';

export const Attribute = styled.div`
  margin-top: 12px;
`;

export const ItemsContainer = styled.div`
  width: 100%;
  margin-top: 4px;
  display: grid;
  gap: 8px;
  grid-template-columns: 70px 70px;
`;

export const CartAttr = css`
  width: 100%;
  height: 100%;
  min-height: 40px;
`;

export const MiniCartSwatch = styled(S.AttrSwatch)`
  ${CartAttr};
`;

export const MiniCartAttr = styled(S.AttrValue)`
  ${CartAttr};
  font-size: 16px;
`;