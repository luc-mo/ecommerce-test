import styled from 'styled-components';
import * as S from 'components/styles';

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

export const Img = styled.img`
  height: 150px;
  width: 80%;
  object-fit: contain;
`;

export const DeleteButton = styled(S.DeleteButton)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
`;