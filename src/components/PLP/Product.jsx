import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from 'store';
import { handlePagePDP, handleCart, handleDefaultAttributes } from 'utils';

import * as S from 'styles/PLP/Product';
import { H2, P } from 'styles';
import { CartIconWhite } from 'components/Icons';

import Image from './Image';

class Product extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handlePagePDP = handlePagePDP.bind(this);
    this.handleCart = handleCart.bind(this);
    this.state = {
      isVisible: false,
      selectedAttributes: handleDefaultAttributes(this.props.product.attributes)
    };
  }

  handleMouseEnter = () => this.setState({ isVisible: true });
  handleMouseLeave = () => this.setState({ isVisible: false });

  render() {
    const { name, brand, gallery, prices, inStock } = this.props.product;
    const { selected } = this.props.currencies;
    const { isVisible } = this.state;
    return <S.Product inStock={inStock}>
      <S.Data
        onClick={this.handlePagePDP}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
        <Image gallery={gallery} name={name} inStock={inStock}/>
        <H2 size='24'>{name}</H2>
        <P>{brand}</P>
        <S.Price size='20' weight='bold'>
          {prices[selected]?.currency.symbol}
          {prices[selected]?.amount}
        </S.Price>
      </S.Data>
      <S.CartButton
        children={<CartIconWhite/>}
        inStock={inStock}
        visible={isVisible}
        onClick={this.handleCart}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      />
    </S.Product>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);