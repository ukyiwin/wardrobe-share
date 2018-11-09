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
    ],
    quantity: 3
  };
  handleDeleteItem = index => {
    //todo confirm deletion
    this.setState(prevState => ({
      selectedItems: [
        ...prevState.selectedItems.slice(0, index),
        ...prevState.selectedItems.slice(index + 1)
      ],
      quantity: prevState.quantity - 1
    }));
  };

  changeItemQuantity = (amount, index) => {
    //check if amount decreases because a quantity of 0 should lead to deletion
    if (amount < 0 && this.state.selectedItems[index].quantity === 1) {
      this.handleDeleteItem(index);
      console.log('deleting ' + index);
      return;
    }
    console.log('changing ' + index + 'by' + amount);

    this.setState(prevState => ({
      selectedItems: [
        ...prevState.selectedItems.slice(0, index),
        {
          ...prevState.selectedItems[index],
          quantity: prevState.selectedItems[index].quantity + amount
        },
        ...prevState.selectedItems.slice(index + 1)
      ],
      quantity: prevState.quantity + amount
    }));
  };

  handleAddItem = productId => {
    //check if item is already in list
    const index = findItemIndex(productId, this.state.selectedItems);
    // increase quantity of existing item
    if (index !== -1) {
      this.changeItemQuantity(1, index);
    } else {
      //add new item to selectedItems
      const item = findItem(productId, productData);
      this.setState(prevState => {
        return {
          selectedItems: [...prevState.selectedItems, { ...item, quantity: 1 }],
          quantity: prevState.quantity + 1
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
          quantity={this.state.quantity}
          changeItemQuantity={this.changeItemQuantity}
        />
      </CreateContainer>
    );
  }
}
export default Create;
