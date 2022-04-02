import React from 'react';
import * as S from '../styles';
import { P } from 'components/styles';
import { CartIconHappy } from 'components/Icons';

class EmptyCart extends React.PureComponent {
  render() {
    const { isHovered } = this.props;
    return <S.ProductsList isHovered={isHovered}>
      <S.EmptyCart>
        <P children='Your shopping cart is empty :('
          weight='bold'
          size='24'/>
        <P children='Add new items to see them here!'
          weight='bold'
          size='24'/>
        <CartIconHappy height='80'/>
      </S.EmptyCart>
    </S.ProductsList>
  }
}

export default EmptyCart;