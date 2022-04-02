import styled from 'styled-components';
import * as S from 'components/styles';

export const Li = styled.li`
  ${S.CenterFlex}
  justify-content: space-between;
  width: 100%;
  padding: 26px 0;
  gap: 20px;
  border-bottom: 1px solid #cccccc;
  &:first-child {
    border-top: 1px solid #cccccc;
  }
`;

export const Name = styled(S.H2)`
  margin-bottom: 6px;
`;

export const Price = styled(S.P)`
  margin: 20px 0;
`;

export const Attribute = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 18px;
  gap: 12px;
`;

export const Quantity = styled.div`
  ${S.CenterFlex}
  flex-direction: column;
  justify-content: space-between;
  height: 170px;
`;

export const QuantityButton = styled(S.WhiteButton)`
  width: 30px;
  height: 30px;
  font-size: 30px;
  &:last-child {
    padding-bottom: 3px;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 16px;
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 250px;
  height: 100%;
  padding: 0 30px;
`;

export const Img = styled(S.Img)`
  padding: 10px;
  background-color: #ffffff;
`;

export const ArrowButton = styled.button`
  background: none;
  font-family: 'Raleway', sans-serif;
  font-size: 26px;
  font-weight: 500;
  position: absolute;
  top: 50%;
  left: 10px;
  border: none;
  cursor: pointer;
  transform: translateY(-50%);
  &:last-child {
    left: auto;
    right: 10px;
  }
`;

export const DeleteButton = styled(S.DeleteButton)`
  width: 26px;
  height: 26px;
`;