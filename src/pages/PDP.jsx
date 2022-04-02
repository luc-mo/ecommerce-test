import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from 'store';
import { getProduct } from 'apollo';
import { arrayProxy } from 'utils';

import * as S from 'styles/PDP';
import {
  Carousel,
  Poster,
  Data,
  Description,
  initialState
} from 'components/PDP';

class PDP extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
    this.getProduct = getProduct.bind(this);
  }

  handleImage = (value) => this.setState({ imageIndex: value });

  handleCart = () => {
    const { product } = this.state;
    const { addProductToCart } = this.props;
    addProductToCart(product);
  }

  async componentDidMount() {
    const product = await this.getProduct();
    const proxyGallery = new Proxy(product.gallery, arrayProxy);
    this.setState({ product, proxyGallery });
  }

  render() {
    const { product, proxyGallery, imageIndex } = this.state;
    const image = proxyGallery[imageIndex];
    return <S.Main>
      <Carousel
        handleImage={this.handleImage}
        gallery={proxyGallery}/>
      <Poster
        image={image}
        name={product.name}/>
      <Data product={product}/>
      <Description description={product.description}/>
    </S.Main>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PDP);