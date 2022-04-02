import styled from 'styled-components';
import * as S from 'styles';

export const Main = styled(S.Main)`
  ${S.CenterFlex}
  flex-direction: column;
  gap: 30px;
  width: 100%;
  animation: fadeIn 0.7s ease-in-out;
`;