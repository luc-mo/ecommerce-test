import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from 'store';

import { H3, AttrSwatch, AttrValue } from 'components/styles';
import * as S from './styles';

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
      <H3 size='20' weight='normal'>{name}:</H3>
      {items.map(item => isSwatch ?
        <AttrSwatch
          onClick={this.handleAttribute}
          data-value={item.value}
          selected={selected}
          key={item.value}/> :
        <AttrValue
          onClick={this.handleAttribute}
          data-value={item.value}
          selected={selected}
          key={item.value}>
          {item.displayValue}
        </AttrValue>
      )}
    </S.Attribute>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Attribute);