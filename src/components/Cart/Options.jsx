import React from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps } from 'store';
import {
  arrayProxy,
  handleDeleteView,
  handleDelete
} from 'utils';

import * as S from 'styles/Cart/Options';
import { Garbage } from 'components/Icons';
import { DeleteView } from 'components/DeleteView';

import Quantity from './Quantity';
import Image from './Image';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteOpen: false,
      selected: 0,
      proxyGallery: new Proxy(
        this.props.product.gallery,
        arrayProxy
      )
    }
    this.handleDeleteView = handleDeleteView.bind(this);
    this.handleDelete = handleDelete.bind(this);
  }

  handleGallery = ({ currentTarget }) => {
    const value = parseInt(currentTarget.value);
    const { selected } = this.state;
    const newIndex = selected + value;
    this.setState({ selected: newIndex });
  }

  render() {
    const { name } = this.props.product;
    const { proxyGallery, selected, deleteOpen } = this.state;
    return <S.Options>
      <S.DeleteButton
        children={<Garbage/>}
        onClick={this.handleDeleteView}/>
      <Quantity {...this.props}/>
      <Image
        name={name}
        gallery={proxyGallery}
        selected={selected}
        handleGallery={this.handleGallery}/>
      {deleteOpen && <DeleteView
        handleDelete={this.handleDelete}
        handleDeleteView={this.handleDeleteView}/>}
    </S.Options>
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Options);
