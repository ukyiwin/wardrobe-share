import React, { Component } from 'react';
import Browse from './BrowseItems';
import WardrobePreview from './WardrobePreview';
import styled from 'styled-components';
import productData from './productDataAllObject';

const CreateContainer = styled.div`
  flex: 1
  display: flex
  min-height: 100%
`;

class Create extends Component {
  state = {
    selectedItems: [
      productData['product-10291490'],
      productData['product-11055483'],
      productData['product-10266249']
    ]
  };
  handleDeleteItem = index => {
    this.setState(prevState => ({
      selectedItems: [
        ...prevState.selectedItems.slice(0, index),
        ...prevState.selectedItems.slice(index + 1)
      ]
    }));
  };
  handleAddItem = productId => {
    console.log(productId);
    this.setState(prevState => ({
      selectedItems: [...prevState.selectedItems, productData[productId]]
    }));
  };
  render() {
    return (
      <CreateContainer>
        {/* <button type="button" onClick={() => console.log(this.state)}>
          state
        </button> */}
        <Browse handleAddItem={this.handleAddItem} />
        <WardrobePreview
          selectedItems={this.state.selectedItems}
          handleDeleteItem={this.handleDeleteItem}
        />
      </CreateContainer>
    );
  }
}
export default Create;
