import React from 'react';

import { P } from 'styles';
import * as S from 'styles/MiniCart/EmptyCart';
import { ProductsList } from 'styles/MiniCart/ProductsList';
import { CartIconHappy } from 'components/Icons';

class EmptyCart extends React.PureComponent {
  render() {
    const { isHovered } = this.props;
    return <ProductsList isHovered={isHovered}>
      <S.EmptyCart>
        <P children='Your shopping cart is empty :('
          weight='bold'
          size='24'/>
        <P children='Add new items to see them here!'
          weight='bold'
          size='24'/>
        <CartIconHappy height='80'/>
      </S.EmptyCart>
    </ProductsList>
  }
}

export default EmptyCart;