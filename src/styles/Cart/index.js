import styled from 'styled-components';
import * as S from 'styles';

export const Main = styled(S.Main)`
  display: flex;
  padding-right: 50px;
  gap: 40px;
`;

export const Cart = styled.section`
  width: 75%;
`;

export const OrderSummary = styled.section`
  position: sticky;
  top: 120px;
  background-color: #ffffff;
  height: fit-content;
  padding: 16px;
  width: 25%;
  border-radius: 6px;
  animation: translateUp 0.7s ease-in-out;
`;

export const H1 = styled(S.H1)`
  margin-bottom: 36px;
`;

export const H2 = styled(S.H2)`
  margin-bottom: 30px;
`;

export const EmptyCart = styled.section`
  ${S.CenterFlex}
  flex-direction: column;
  gap: 30px;
  height: calc(100vh - 140px);
  width: 100%;
  animation: fadeIn 0.7s ease-in-out;
`;