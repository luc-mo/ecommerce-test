import styled from 'styled-components';
import * as S from 'styles';
import { NavLink } from 'react-router-dom';

export const NavCategory = styled(NavLink)`
  ${S.CenterFlex}
  height: 100%;
  padding: 6px 16px;
  color: #1D1F22;
  font-size: 20px;
  text-decoration: none;
  border: none;
  border-bottom: 3px solid #ffffff;
  transition: 0.1s linear;
  transition-property: border, color;
  cursor: pointer;
  &:hover, &[class*="active"] {
    color: #5ECE7B;
    border-bottom: 3px solid #5ECE7B;
  }
`;