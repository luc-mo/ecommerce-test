import styled from 'styled-components';

export const CarouselArrow = styled.img`
  width: 30px;
  height: 30px;
  ${props => props.inverted && `transform: rotate(180deg);`}
`;

export const NavArrow = styled.img`
  height: 7px;
  margin-left: 10px;
  transform: ${props =>
    props.isHovered ?
    `rotateX(180deg)` :
    `rotateX(0deg)`
  };
  transition: transform 0.3s linear;
`;

export const Logo = styled.img`
  height: 60%;
  justify-self: center;
  align-self: center;
`;

export const CartIcon = styled.img`
  height: 32px;
`;