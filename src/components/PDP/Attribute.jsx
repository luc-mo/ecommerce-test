import React from 'react';
import { H2, AttrSwatch, AttrValue } from 'styles';
import * as S from 'styles/PDP/Attribute';

class Attribute extends React.Component {
  setAttribute = ({ target }) => {
    const { value } = target.dataset;
    const { handleAttributes } = this.props;
    const { name } = this.props.attribute;
    handleAttributes({ name, value });
  }

  render() {
    const { name, type, items } = this.props.attribute;
    const { selected } = this.props;
    const isSwatch = type === 'swatch';
    return <div>
      <H2 size='20'>{name.toUpperCase()}:</H2>
      <S.Items>
        {items.map(item => isSwatch ?
          <AttrSwatch
            onClick={this.setAttribute}
            data-value={item.value}
            selected={selected}
            key={item.id}/> :
          <AttrValue
            onClick={this.setAttribute}
            data-value={item.value}
            selected={selected}
            key={item.id}>
            {item.displayValue}
          </AttrValue>
        )}
      </S.Items>
    </div>
  }
}

export default Attribute;