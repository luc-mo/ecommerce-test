import React from 'react';
import * as S from 'styles/Cart/Image';

class Image extends React.Component {
  render() {
    const { name, gallery, selected, handleGallery } = this.props;
    const isGallery = gallery.length > 1;
    const image = gallery[selected];
    return <S.ImgContainer>
      {isGallery ?
      <React.Fragment>
        <S.ArrowButton children='<' value={-1} onClick={handleGallery}/>
        <S.Img src={image} alt={name}/>
        <S.ArrowButton children='>' value={1} onClick={handleGallery}/>
      </React.Fragment> : 
      <S.Img src={image} alt={name}/>}
    </S.ImgContainer>
  }
}

export default Image;