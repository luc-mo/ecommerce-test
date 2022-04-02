import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from 'store';

import * as S from 'styles';
import CurrencyList from './CurrencyList';
import { NavArrow } from 'components/Icons';

class CurrencyButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
  }
  
  handleHoverEnter = () => this.setState({ isHovered: true });
  handleHoverLeave = () => this.setState({ isHovered: false });

  render() {
    const { handleHoverEnter, handleHoverLeave } = this;
    const { currencies, selected } = this.props.currencies; 
    const { isHovered } = this.state;
    return <React.Fragment>
      <S.NavListContainer
        ref={this.listRef}
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}>
        <S.NavButton>
          {currencies[selected]?.symbol}
          <NavArrow isHovered={isHovered}/>
        </S.NavButton>
        <CurrencyList isHovered={isHovered}/>
      </S.NavListContainer>
      <S.NavBlur isHovered={isHovered}/>
    </React.Fragment>
  }
}

export default connect(
  mapStateToProps
)(CurrencyButton);