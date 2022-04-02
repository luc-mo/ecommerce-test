import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from 'store';

import * as S from './styles';
import { P } from 'components/styles';
import Attribute from './Attribute';

class Data extends React.Component {
  render() {
    const { product: p } = this.props;
    const { selected } = this.props.currencies;
    return <div>
      <S.Name children={p.name} size='26'/>
      <P children={p.brand} size='20'/>
      <S.Price size='20' weight='bold'>
        {p.prices[selected]?.currency.symbol}
        {p.prices[selected]?.amount}
      </S.Price>
      {p.attributes.map(attribute => <Attribute
        productId={p.id}
        selected={p.selectedAttributes[attribute.name]}
        attribute={attribute}
        key={attribute.name}
      />)}
    </div>
  }
}

export default connect(
  mapStateToProps
)(Data);