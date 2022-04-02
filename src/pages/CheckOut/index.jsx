import React from 'react';

import * as S from './styles';
import { P } from 'components/styles';
import { CartIconHappy } from 'components/Icons';

class CheckOut extends React.Component {
  render() {
    return <S.Main>
      <P children='Thank you for shopping in our store!' size='40'/>
      <P size='26'>
        Visit the <S.Link to='/'>product list page</S.Link> if you want to buy more products.
      </P>
      <CartIconHappy height='100'/>
    </S.Main>
  }
}

export default CheckOut;