import styled from 'styled-components';
import * as S from 'components/styles';
import { NavLink } from 'react-router-dom';

export const H3 = styled(S.H3)`
  display: flex;
  padding: 20px;
  padding-bottom: 14px;
  & > span {
    &:first-child { font-weight: bold } 
    &:last-child { font-weight: normal }
  }
`;

export const P = styled(S.P)`
  margin-bottom: 8px;
`;

export const Img = styled.img`
  height: 150px;
  width: 80%;
  object-fit: contain;
`;

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

export const NavButton = styled.button`
  ${S.CenterFlex}
  background: none;
  font-size: 26px;
  height: 100%;
  min-width: 100px;
  padding: 6px 18px;
  color: #000000;
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const CartCounter = styled.div`
  ${S.CenterFlex}
  ${S.SelectedColors}
  width: 26px;
  height: 26px;
  padding: 8px;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  position: absolute;
  right: 14px;
  top: 14px;
  border-radius: 100%;
  animation: scaleUp 0.6s ease-in-out;
`;

export const ListsContainer = styled.div`
  position: relative;
  height: 100%;
  z-index: 500;
`;

export const CurrencyList = styled.ul`
  background-color: #ffffff;
  max-height: ${props => props.isHovered ? '100vh' : '0'};
  width: 100px;
  position: absolute;
  top: 80px;
  list-style: none;
  text-align: center;
  overflow-y: hidden;
  border-radius: 0 0 4px 4px;
`;

export const CurrencyItem = styled.li`
  padding: 8px 12px;
  font-size: 18px;
  transition: color 0.1s ease-in-out;
  overflow-wrap: break-word;
  cursor: pointer;
  &:hover {
    color: #5ECE7B;
  }
  &:first-child {
    padding-top: 16px;
  }
  &:last-child {
    padding-bottom: 16px;
  }
`;

export const ProductsList = styled.ul`
  background-color: #ffffff;
  max-height: ${props => props.isHovered ? '580px' : '0'};
  width: 500px;
  position: absolute;
  top: 80px;
  right: 0;
  overflow-y: auto;
  list-style: none;
  border-radius: 0 0 4px 4px;
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

export const Quantity = styled.div`
  ${S.CenterFlex}
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 20%;
`;

export const QuantityButton = styled(S.WhiteButton)`
  width: 26px;
  height: 26px;
  font-size: 30px;
  &:last-child {
    padding-bottom: 3px;
  }
`;

export const DeleteButton = styled(S.DeleteButton)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
`;

export const MiniCartButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  padding: 20px;
`;

export const Total = styled(S.P)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CartButton = styled(S.WhiteButton)`
  width: 200px;
  height: 50px;
  font-size: 20px;
`;

export const CheckOutButton = styled(S.GreenButton)`
  font-size: 20px;
  width: 200px;
  height: 50px;
`;

export const EmptyCart = styled.li`
  ${S.CenterFlex}
  flex-direction: column;
  text-align: center;
  gap: 20px;
  width: 100%;
  padding: 20px;
`;

export const NavBlur = styled.div`
  ${props => !props.isHovered && 'display: none'};
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 80px;
  left: 0;
  z-index: 100;
`;