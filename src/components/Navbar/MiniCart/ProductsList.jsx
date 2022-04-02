import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from 'store';
import {
  handlePageCart,
  handlePageCheckOut,
  handleCount,
  handleTotal
} from 'utils';

import * as S from 'styles/MiniCart/ProductsList';
import Product from './Product';

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.handlePageCart = handlePageCart.bind(this);
    this.handlePageCheckOut = handlePageCheckOut.bind(this);
    this.handleTotal = handleTotal.bind(this);
  }

  render() {
    const { isHovered, cart } = this.props;
    const { selected, currencies } = this.props.currencies;
    const productsArray = Object.values(cart);
    const count = productsArray.reduce(handleCount, 0);
    const total = productsArray.reduce(this.handleTotal, 0);
    return <S.ProductsList isHovered={isHovered}>
      <S.H3 size='22'>
        <span>Cart</span>
        <span>, {count} items</span>
      </S.H3>
      {productsArray.map(product => <Product
        product={product}
        key={product.id}
      />)}
      <S.MiniCartButtons>
        <S.Total size='22' weight='bold'>
          <span>Total</span>
          <span>{currencies[selected].symbol}{total}</span>
        </S.Total>
        <S.CartButton
          children='View Cart'
          onClick={this.handlePageCart}/>
        <S.CheckOutButton
          children='Check Out'
          onClick={this.handlePageCheckOut}/>
      </S.MiniCartButtons>
    </S.ProductsList>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductsList));