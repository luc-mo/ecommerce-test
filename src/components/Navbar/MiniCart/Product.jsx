import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from 'store';
import { handleDeleteView, handleDelete } from 'utils';

import * as S from 'styles/MiniCart/Product';
import { H4 } from 'styles';
import { Garbage } from 'components/Icons';
import { DeleteView } from 'components/DeleteView';
import Attribute from './Attribute';
import Quantity from './Quantity';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { deleteOpen: false };
    this.handleDeleteView = handleDeleteView.bind(this);
    this.handleDelete = handleDelete.bind(this);
  }

  render() {
    const { product: p } = this.props;
    const { selected } = this.props.currencies;
    const { deleteOpen } = this.state;
    return <S.Product>
      <S.ProductSection>
        <H4 children={p.name}/>
        <S.P children={p.brand}/>
        <S.P weight='bold'>
          {p.prices[selected]?.currency.symbol}
          {p.prices[selected]?.amount}
        </S.P>
        {p.attributes.map(attribute => <Attribute
          productId={p.id}
          selected={p.selectedAttributes[attribute.name]}
          attribute={attribute}
          key={attribute.name}/>
        )}
      </S.ProductSection>
      <S.ProductSection>
        <Quantity {...this.props}/>
        <S.Img src={p.gallery[0]} alt={p.name}/>
      </S.ProductSection>
      <S.DeleteButton
        children={<Garbage/>}
        onClick={this.handleDeleteView}/>
      {deleteOpen && <DeleteView
        handleDelete={this.handleDelete}
        handleDeleteView={this.handleDeleteView}
      />}
    </S.Product>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);