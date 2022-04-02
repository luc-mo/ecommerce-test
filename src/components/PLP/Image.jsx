import React from 'react';

import * as S from './styles';
import { Img } from 'components/styles';

class Image extends React.PureComponent {
  render() {
    const { gallery, name, inStock } = this.props;
    return <S.ImgContainer>
      <Img src={gallery[0]} alt={name}/>
      <S.OutOfStock
        size='24'
        inStock={inStock}>
        OUT OF STOCK
      </S.OutOfStock>
    </S.ImgContainer>
  }
}

export default Image;