import React from 'react';

import * as S from 'styles/Icons';
import { arrow } from 'icons';

export class CarouselArrow extends React.PureComponent {
  render() {
    const { inverted } = this.props;
    return <S.CarouselArrow src={arrow} alt='arrow' inverted={inverted}/>;
  }
}

export class NavArrow extends React.PureComponent {
  render() {
    const { isHovered } = this.props;
    return <S.NavArrow src={arrow} alt='arrow' isHovered={isHovered}/>;
  }
}