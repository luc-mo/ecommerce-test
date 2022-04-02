import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from 'store';
import { getCategories } from 'apollo';

import * as S from './styles';
import { Logo } from 'components/Icons';
import {
  NavCategory,
  Currency,
  MiniCart
} from 'components/Navbar';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };
  }

  async componentDidMount() {
    const { setCurrencies } = this.props;
    const { categories, currencies } = await getCategories();
    this.setState({ categories });
    setCurrencies(currencies);
  }

  render() {
    const { categories } = this.state;
    return <S.Nav>
      <S.NavLinksContainer>
        {categories.map(({ name }) => <NavCategory
          categoryName={name}
          key={name}
        />)}
      </S.NavLinksContainer>
      <Logo/>
      <S.NavButtonsContainer>
        <Currency/>
        <MiniCart/>
      </S.NavButtonsContainer>
    </S.Nav>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);