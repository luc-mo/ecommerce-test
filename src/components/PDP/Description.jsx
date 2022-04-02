import React from 'react';
import { changeTitles } from 'utils';
import * as S from 'styles/PDP/Description';

class Description extends React.Component {
  render() {
    const { description } = this.props;
    const __html = changeTitles(description);
    return <S.DescSection>
      <S.H2 children='DESCRIPTION:' size='22'/>
      <div dangerouslySetInnerHTML={{ __html }}/>
    </S.DescSection>
  }
}

export default Description;