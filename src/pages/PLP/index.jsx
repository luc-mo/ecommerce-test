import React from 'react';
import { getProducts } from 'apollo';

import * as S from './styles';
import { Main } from 'components/styles';
import { Product } from 'components/PLP';

class PLP extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categoryName: '', products: [] };
    this.getProducts = getProducts.bind(this);
  }

  handleProducts = async() => {
    const { categoryName, products } = await this.getProducts();
    this.setState({ categoryName, products });
  }

  async componentDidMount() {
    await this.handleProducts();
  }
  
  async componentDidUpdate(prevProps) {
    const { url: prevUrl } = prevProps.match;
    const { url: currentUrl } = this.props.match;
    if(prevUrl !== currentUrl) await this.handleProducts();
  }

  render() {
    const { categoryName, products } = this.state;
    const { history } = this.props;
    return <Main>
      <S.H1>{categoryName === 'All' ? 'All products' : categoryName}</S.H1>
      <S.ProductsList>
        {products.map(product => <Product
          product={product}
          history={history}
          key={product.id}
        />)}
      </S.ProductsList>
    </Main>
  }
}

export default PLP;