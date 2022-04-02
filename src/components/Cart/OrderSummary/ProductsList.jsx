import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from 'store';

import * as S from 'styles/OrderSummary/ProductList';
import Product from './Product';

class ProductsList extends React.Component {
  render() {
    const { cart, currencies: { selected }} = this.props;
    const products = Object.values(cart);
    return <S.ProductsList>
      {products.map(product => <Product
        product={product}
        selected={selected}
        key={product.id}/>
      )}
    </S.ProductsList>
  }
}

export default connect(
  mapStateToProps,
)(ProductsList);