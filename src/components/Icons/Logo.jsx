import React from 'react';

import * as S from './styles';
import { logo } from 'icons';

class Logo extends React.PureComponent {
  render() {
    return <S.Logo src={logo} alt='logo'/>
  }
}

export default Logo;