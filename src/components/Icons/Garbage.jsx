import React from 'react';

import { Img } from 'components/styles';
import { garbage } from 'icons';

class Garbage extends React.PureComponent {
  render() {
    return <Img src={garbage} alt='delete'/>
  }
}

export default Garbage;