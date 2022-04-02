import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { mapStateToProps } from 'store';
import { handlePageCart, handleCount } from 'utils';

import * as S from 'styles';
import { CartCounter } from 'styles/MiniCart'
import { CartIcon } from 'components/Icons';
import ProductsList from './ProductsList';
import EmptyCart from './EmptyCart';

class MiniCart extends React.Component {
  constructor(props) {
    super(props);
    this.handlePageCart = handlePageCart.bind(this);
    this.state = { isHovered: false };
    this.listRef = React.createRef();
  }

  handleEnter = () => this.setState({ isHovered: true });
  handleLeave = () => this.setState({ isHovered: false });

  checkHover = ({ target }) => {
    if(this.listRef.current) {
      const { isHovered } = this.state;
      const mouseOver = this.listRef.current.contains(target);
      if(!isHovered && mouseOver)
        this.handleEnter();
      else if(isHovered && !mouseOver)
        this.handleLeave();
    }
  }

  componentDidMount() {
    document.addEventListener('mouseover', this.checkHover);
  }
  
  componentWillUnmount() {
    document.removeEventListener('mouseover', this.checkHover);
  }

  render() {
    const { isHovered } = this.state;
    const { cart, location } = this.props;
    const count = Object.values(cart).reduce(handleCount, 0);
    const isCartCheckOutPage = /cart|checkout/.test(location.pathname);
    return <React.Fragment>
      <S.NavListContainer
        ref={this.listRef}
        onMouseEnter={this.handleEnter}
        onMouseLeave={this.handleLeave}>
        <Link to='/cart'>
          <S.NavButton 
            children={<CartIcon/>}
            onClick={this.handlePageCart}/>
          {count > 0 && <CartCounter children={count}/>}
        </Link>
        {isCartCheckOutPage ? null : count > 0 ?
          <ProductsList isHovered={isHovered}/> :
          <EmptyCart isHovered={isHovered}/>
        }
      </S.NavListContainer>
      {!isCartCheckOutPage && <S.NavBlur isHovered={isHovered}/>}
    </React.Fragment>
    
  }
}

export default connect(
  mapStateToProps
)(withRouter(MiniCart));