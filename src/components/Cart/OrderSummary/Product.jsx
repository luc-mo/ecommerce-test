import React from 'react';

import * as S from './styles';
import { P } from 'components/styles';

class Product extends React.Component {
  render() {
    const { selected } = this.props;
    const { name, count, prices } = this.props.product;
    const { amount, currency } = prices[selected];
    return <S.Product>
      <S.H3 children={name} size='22'/>
      <P size='20'>{count} x {currency.symbol}{amount}</P>
    </S.Product>
  }
}

export default Product;