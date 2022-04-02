import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from 'store';

import * as S from 'styles/Currency';
import CurrencyItem from './CurrencyItem';

class CurrencyList extends React.PureComponent {
  render() {
    const { currencies } = this.props.currencies;
    const { isHovered } = this.props;
    return <S.CurrencyList isHovered={isHovered}>
      {currencies.map((currency, index) => 
        <CurrencyItem
          currency={currency}
          selected={index}
          key={currency.label}
        />
      )}
    </S.CurrencyList>
  }
}

export default connect(mapStateToProps)(CurrencyList);