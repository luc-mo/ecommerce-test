import React from 'react';

import * as S from './styles';
import { H2, P } from 'components/styles';

export class DeleteView extends React.Component {
  render() {
    const { handleDeleteView, handleDelete } = this.props;
    return <React.Fragment>
      <S.DeleteBlur/>
      <S.DeleteBox>
        <H2 children='Are you sure about this?' size='30'/>
        <P children='This action will remove this item from your cart.'/>
        <S.ButtonsContainer>
          <S.DeleteOK
            children='OK'
            onClick={handleDelete}/>
          <S.DeleteCancel
            children='Cancel'
            onClick={handleDeleteView}/>
        </S.ButtonsContainer>
      </S.DeleteBox>
    </React.Fragment>
  }
}