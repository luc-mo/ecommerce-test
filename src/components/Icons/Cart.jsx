import React from 'react';

import * as S from 'styles/Icons';
import { Img } from 'styles';
import { cart, cartWhite, happyCart } from 'icons';

export class CartIcon extends React.PureComponent {
  render() {
    return <S.CartIcon src={cart} alt='cart'/>;
  }
}

export class CartIconWhite extends React.PureComponent {
  render() {
    return <Img src={cartWhite} alt='cart'/>
  }
}

export class CartIconHappy extends React.PureComponent {
  render() {
    return <img src={happyCart} alt='cart' {...this.props}/>
  }
}