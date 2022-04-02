import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from 'store';
import { handleCount } from 'utils';

import * as S from 'styles/Cart';
import { P, Link } from 'styles';
import { CartIconHappy } from 'components/Icons';
import { Products, OrderSummary } from 'components/Cart';

class Cart extends React.Component {
  render() {
    const { cart } = this.props;
    const count = Object.values(cart).reduce(handleCount, 0);
    return <S.Main>
      {count > 0 ?
      <React.Fragment>
        <S.Cart>
          <S.H1 children='Cart'/>
          <Products/>
        </S.Cart>
        <S.OrderSummary>
          <S.H2 children='Order Summary' size='30'/>
          <OrderSummary/>
        </S.OrderSummary>
      </React.Fragment> :
      <S.EmptyCart>
        <P children='Your shopping cart is empty :(' size='40'/>
        <P size='26'>
          Visit the <Link to='/'>product list page</Link> to add new items here!
        </P>
        <CartIconHappy height='100'/>
      </S.EmptyCart>}
    </S.Main>
  }
}

export default connect(
  mapStateToProps
)(Cart);