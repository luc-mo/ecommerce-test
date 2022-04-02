import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from 'store';
import { handleTotal, handlePageCheckOut } from 'utils';

import * as S from './styles';
import ProductsList from './ProductsList';

class OrderSummary extends React.Component {
  constructor(props) {
    super(props);
    this.handleTotal = handleTotal.bind(this);
    this.handlePageCheckOut = handlePageCheckOut.bind(this);
  }
  
  render() {
    const { cart } = this.props;
    const { currencies, selected } = this.props.currencies;
    const total = Object.values(cart).reduce(this.handleTotal, 0);
    const { symbol } = currencies[selected];
    return <React.Fragment>
      <ProductsList/>
      <S.Footer>
        <S.P size='20' weight='bold'>
          <span>Total :</span>
          <span>{symbol}{total}</span>
        </S.P>
        <S.CartButton
          children='BUY'
          onClick={this.handlePageCheckOut}/>
      </S.Footer>
    </React.Fragment>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(OrderSummary));