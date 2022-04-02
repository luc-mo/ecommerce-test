import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from 'store';
import * as S from '../styles';

class Item extends React.PureComponent {
  handleCurrency = () => {
    const { selected, changeCurrency } = this.props;
    changeCurrency(selected);
  }

  render() {
    const { currency } = this.props;
    return <S.CurrencyItem onClick={this.handleCurrency}>
      {currency.symbol} {currency.label}
    </S.CurrencyItem>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);