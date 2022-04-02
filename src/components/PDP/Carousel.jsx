import React from 'react';
import * as S from 'styles/PDP/Carousel';
import { CarouselArrow } from 'components/Icons';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageIndex: 0 };
  }

  handleCarousel = ({ currentTarget }) => {
    const value = parseInt(currentTarget.value);
    const { handleImage } = this.props;
    const newIndex = this.state.imageIndex + value;
    this.setState({ imageIndex: newIndex });
    handleImage(newIndex);
  }

  render() {
    const { gallery } = this.props;
    const { imageIndex } = this.state;
    const prevIndex = imageIndex - 1;
    const nextIndex = imageIndex + 1;
    return <S.Carousel>
      {gallery.length === 1 ? <S.GalleryImg alt='carousel' src={gallery[0]}/> :
      gallery.length > 0 && <React.Fragment>
        <S.ArrowButton
          children={<CarouselArrow inverted/>}
          value={-1}
          onClick={this.handleCarousel}
        />
        <S.GalleryImg alt='carousel' src={gallery[prevIndex]}/>
        <S.GalleryImg alt='carousel' src={gallery[imageIndex]} center/>
        <S.GalleryImg alt='carousel' src={gallery[nextIndex]}/>
        <S.ArrowButton
          children={<CarouselArrow/>}
          value={1}
          onClick={this.handleCarousel}
        />
      </React.Fragment>}
    </S.Carousel>
  }
}

export default Carousel;

