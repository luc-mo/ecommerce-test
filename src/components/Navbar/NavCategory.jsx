import React from 'react';
import * as S from 'styles/Navbar/NavCategory';

class NavCategory extends React.PureComponent {
  render() {
    const { categoryName } = this.props;
    const route = categoryName === 'all' ? '/' : `/${categoryName}`;
    return <S.NavCategory
      children={categoryName.toUpperCase()}
      to={route}
      exact
    />
  }
}

export default NavCategory;