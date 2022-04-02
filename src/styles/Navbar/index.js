import styled from 'styled-components';
import * as S from 'styles';

export const Nav = styled.nav`
  background-color: #ffffff;
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  z-index: 90;
`;

export const NavLinksContainer = styled.div`
  ${S.CenterFlex}
  justify-content: flex-start;
  padding-left: 100px;
`;

export const NavButtonsContainer = styled.div`
  ${S.CenterFlex}
  justify-content: flex-end;
  padding-right: 80px;
`;