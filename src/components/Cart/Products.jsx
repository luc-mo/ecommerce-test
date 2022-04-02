import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from 'store';

import * as S from 'styles/Cart/Products';
import Data from './Data';
import Options from './Options';

class Products extends React.Component {
  render() {
    const { cart } = this.props;
    const productsArray = Object.values(cart);
    return <ul>
      {productsArray.map(product => <S.Li key={product.id}>
        <Data product={product}/>
        <Options product={product}/>
      </S.Li>)}
    </ul>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);