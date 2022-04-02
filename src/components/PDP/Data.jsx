import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from 'store';
import { handleCart, handleDefaultAttributes } from 'utils';

import * as S from './styles';
import { H1, H2, P } from 'components/styles';
import Attribute from './Attribute';

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.handleCart = handleCart.bind(this);
    this.state = { selectedAttributes: {}};
  }

  handleAttributes = ({ name, value }) => {
    const { selectedAttributes } = this.state;
    this.setState({ selectedAttributes: {
      ...selectedAttributes,
      [name]: value
    }});
  }

  componentDidUpdate(prevProps) {
    const { id: prevId } = prevProps.product;
    const { id, attributes } = this.props.product;
    if(prevId !== id) {
      const selectedAttributes = handleDefaultAttributes(attributes);
      this.setState({ selectedAttributes });
    }
  }

  render() {
    const { name, brand, inStock, prices, attributes } = this.props.product;
    const { selected } = this.props.currencies;
    const { selectedAttributes } = this.state;
    return <S.Data>
      <header>
        <H1 children={name} size='36'/>
        <P children={brand} size='20'/>
      </header>
      <S.Price>
        <H2 children='PRICE:' size='20'/>
        <P size='24' weight='bold'>
          {prices[selected]?.currency.symbol}
          {prices[selected]?.amount}
        </P>
      </S.Price>
      {attributes.map(attribute => <Attribute
        selected={selectedAttributes[attribute.name]}
        handleAttributes={this.handleAttributes}
        attribute={attribute}
        key={attribute.name}
      />)}
      <S.CartButton
        onClick={this.handleCart}
        disabled={!inStock}>
        {inStock ? 'ADD TO CART' : 'OUT OF STOCK'}
      </S.CartButton>
    </S.Data>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Data);