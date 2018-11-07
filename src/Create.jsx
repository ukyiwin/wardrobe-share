import React, { Component } from 'react';
import BrowseItems from './BrowseItems';
import WardrobePreview from './WardrobePreview';
import styled from 'styled-components';
import productDataObject from './productDataAllObject';
import productData from './productDataAll';

const CreateContainer = styled.div`
  display: flex;
  flex: 1 1 0;
  overflow-y: auto;
`;

const findItem = (productId, list) => {
  return list.find(({ id }) => id === productId);
};

const findItemIndex = (productId, list) => {
  return list.findIndex(({ id }) => id === productId);
};

class Create extends Component {
  state = {
    selectedItems: [
      {
        ...productDataObject['product-10291490'],
        quantity: 1
      },
      { ...productDataObject['product-11055483'], quantity: 1 },
      { ...productDataObject['product-10266249'], quantity: 1 }
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
    //check if item is already in list
    const itemIndex = findItemIndex(productId, this.state.selectedItems);
    // const quantity = itemInSelected !== -1 ? itemInSelected.quanity + 1 : 1;
    if (itemIndex !== -1) {
      console.log('existing item');
      this.setState(prevState => {
        return {
          selectedItems: [
            ...prevState.selectedItems.slice(0, itemIndex),
            {
              ...prevState.selectedItems[itemIndex],
              quantity: prevState.selectedItems[itemIndex].quantity + 1
            },
            ...prevState.selectedItems.slice(itemIndex + 1)
          ]
        };
      });
    } else {
      const item = findItem(productId, productData);
      console.log('new item');
      this.setState(prevState => {
        return {
          selectedItems: [...prevState.selectedItems, { ...item, quantity: 1 }]
        };
      });
    }
  };
  render() {
    return (
      <CreateContainer>
        <BrowseItems handleAddItem={this.handleAddItem} />
        <WardrobePreview
          selectedItems={this.state.selectedItems}
          handleDeleteItem={this.handleDeleteItem}
        />
      </CreateContainer>
    );
  }
}
export default Create;
