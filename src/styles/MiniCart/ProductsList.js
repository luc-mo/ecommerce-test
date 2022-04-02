import styled from 'styled-components';
import * as S from 'styles';

export const H3 = styled(S.H3)`
  display: flex;
  padding: 20px;
  padding-bottom: 14px;
  & > span {
    &:first-child { font-weight: bold } 
    &:last-child { font-weight: normal }
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