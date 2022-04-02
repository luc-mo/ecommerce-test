import React from 'react';

import * as S from 'styles/CheckOut';
import { P, Link } from 'styles';
import { CartIconHappy } from 'components/Icons';

class CheckOut extends React.Component {
  render() {
    return <S.Main>
      <P children='Thank you for shopping in our store!' size='40'/>
      <P size='26'>
        Visit the <Link to='/'>product list page</Link> if you want to buy more products.
      </P>
      <CartIconHappy height='100'/>
    </S.Main>
  }
}

export default CheckOut;