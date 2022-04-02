import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from 'store';

import * as S from 'styles/MiniCart/Attribute';
import { H5 } from 'styles';

class Attribute extends React.Component {
  handleAttribute = ({ target }) => {
    const { productId: id, changeAttribute } = this.props;
    const { name } = this.props.attribute;
    const { value } = target.dataset;
    changeAttribute({ id, name, value });
  }

  render() {
    const { name, type, items } = this.props.attribute;
    const { selected } = this.props;
    const isSwatch = type === 'swatch';
    return <S.Attribute>
      <H5>{name.toUpperCase()}:</H5>
      <S.ItemsContainer>
        {items.map(item => isSwatch ?
          <S.MiniCartSwatch
            data-value={item.value}
            selected={selected}
            onClick={this.handleAttribute}
            key={item.value}/> :
          <S.MiniCartAttr
            data-value={item.value}
            selected={selected}
            onClick={this.handleAttribute}
            key={item.value}>
            {item.displayValue}
          </S.MiniCartAttr>
        )}
      </S.ItemsContainer>
    </S.Attribute>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Attribute);