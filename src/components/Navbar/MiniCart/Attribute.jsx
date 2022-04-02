import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from 'store';

import * as S from '../styles';
import { H5, MiniCartSwatch, MiniCartAttr } from 'components/styles';

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
          <MiniCartSwatch
            data-value={item.value}
            selected={selected}
            onClick={this.handleAttribute}
            key={item.value}/> :
          <MiniCartAttr
            data-value={item.value}
            selected={selected}
            onClick={this.handleAttribute}
            key={item.value}>
            {item.displayValue}
          </MiniCartAttr>
        )}
      </S.ItemsContainer>
    </S.Attribute>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Attribute);