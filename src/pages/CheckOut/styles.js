import styled from 'styled-components';
import * as S from 'components/styles';
import { Link as LinkWithoutStyle } from 'react-router-dom';

export const Main = styled(S.Main)`
  ${S.CenterFlex}
  flex-direction: column;
  gap: 30px;
  width: 100%;
  animation: fadeIn 0.7s ease-in-out;
`;

export const Link = styled(LinkWithoutStyle)`
  text-decoration: none;
  color: #5ECE7B;
  &:visited {
    color: #5ECE7B;
  }
`;