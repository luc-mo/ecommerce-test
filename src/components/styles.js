import styled, { css } from 'styled-components';

export const CenterFlex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NonSelectedColors = css`
  background-color: #ffffff;
  color: #000000;
`;

export const SelectedColors = css`
  background-color: #000000;
  color: #ffffff;
`;

export const CartAttr = css`
  width: 100%;
  height: 100%;
  min-height: 40px;
`;

export const GreenButton = styled.button`
  ${CenterFlex}
  font-family: 'Raleway', sans-serif;
  background-color: #5ECE7B;
  color: #ffffff;
  border: none;
  transition: opacity 0.2s ease-in-out;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.35);
  z-index: 10;
  &:hover:enabled {
    background-color: #47C767;
    cursor: pointer;
  }
  &:active:enabled {
    background-color: #41C161;
    box-shadow: none;
    cursor: pointer;
  }
`;

export const WhiteButton = styled.button`
  ${CenterFlex}
  ${NonSelectedColors}
  font-family: 'Raleway', sans-serif;
  border: 1px solid #000000;
  transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    ${SelectedColors}
  }
`;

export const DeleteButton = styled.button`
  background: none;
  margin: auto 0;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const Main = styled.main`
  min-height: calc(100vh - 80px);
  padding: 26px 100px;
  background-color: #f5f5f5;
`;

export const P = styled.p`
  font-size: ${props => props.size ? `${props.size}px` : '18px'};
  font-weight: ${props => props.weight || 'normal'};
`;

export const H1 = styled.h1`
  font-size: ${props => props.size ? `${props.size}px` : '42px'};
  font-weight: ${props => props.weight || 'bold'};
`;

export const H2 = styled.h2`
  font-size: ${props => props.size ? `${props.size}px` : '26px'};
  font-weight: ${props => props.weight || 'bold'};
`;

export const H3 = styled.h3`
  font-size: ${props => props.size ? `${props.size}px` : '24px'};
  font-weight: ${props => props.weight || 'bold'};
`;

export const H4 = styled.h4`
  font-size: ${props => props.size ? `${props.size}px` : '18px'};
  font-weight: ${props => props.weight || 'bold'};
`;

export const H5 = styled.h5`
  font-size: ${props => props.size ? `${props.size}px` : '16px'};
  font-weight: ${props => props.weight || 'bold'};
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const AttrSwatch = styled.span`
  width: 70px;
  height: 40px;
  background-color: ${props => props['data-value']};
  margin-right: 12px;
  cursor: pointer;
  border: ${props =>
    props.selected !== props['data-value'] ?
    '1px solid #bbbbbb' :
    '3px solid #bbbbbb'
  };
`;

export const AttrValue = styled.span`
  ${CenterFlex};
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 20px;
  height: 40px;
  padding: 6px 12px;
  margin-right: 12px;
  border: 1px solid #000000;
  cursor: pointer;
  ${props => 
    props.selected !== props['data-value'] ?
    NonSelectedColors :
    SelectedColors
  };
`;

export const MiniCartSwatch = styled(AttrSwatch)`
  ${CartAttr};
`;

export const MiniCartAttr = styled(AttrValue)`
  ${CartAttr};
  font-size: 16px;
`;