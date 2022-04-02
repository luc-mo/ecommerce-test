import React from 'react';
import { Img } from 'styles';
import * as S from 'styles/PDP/Poster';

class Poster extends React.Component {
  render() {
    const { image, name } = this.props;
    return <S.Poster>
      <Img src={image} alt={name}/>
    </S.Poster>
  }
}

export default Poster;