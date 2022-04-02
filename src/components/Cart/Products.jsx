import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from 'store';

import { Li } from './styles';
import Data from './Data';
import Options from './Options';

class Products extends React.Component {
  render() {
    const { cart } = this.props;
    const productsArray = Object.values(cart);
    return <ul>
      {productsArray.map(product => <Li key={product.id}>
        <Data product={product}/>
        <Options product={product}/>
      </Li>)}
    </ul>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);