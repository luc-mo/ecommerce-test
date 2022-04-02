import React from 'react';

import * as S from './styles';
import { P } from 'components/styles';

class Quantity extends React.Component {
  handleIncrement = () => this.props.incrementCount(this.props.product.id);
  handleDecrement = () => this.props.decrementCount(this.props.product.id);

  render() {
    const { count } = this.props.product;
    return <S.Quantity>
      <S.QuantityButton children='+' onClick={this.handleIncrement}/>
      <P children={count} size='24'/>
      <S.QuantityButton children='-' onClick={this.handleDecrement}/>
    </S.Quantity>
  }
}

export default Quantity;