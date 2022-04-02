import styled from 'styled-components';

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