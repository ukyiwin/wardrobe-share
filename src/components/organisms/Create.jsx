import React, { Component } from 'react';
import styled from 'styled-components';
import productData from '../../data/productDataAll';
import BrowseItems from './BrowseItems';
import WardrobePreview from './WardrobePreview';
import { findItem, findItemIndex } from '../../utils';

class Create extends Component {
  state = {
    selectedItems: [
      {
        id: 'product-10291490',
        description: "Adidas Originals Yung'1 Trainers In Grey Multi",
        url:
          'https://www.asos.com/adidas-originals/adidas-originals-yung1-trainers-in-grey-multi/prd/10291490',
        price: 100,
        images: ['10291490-1-sesame', '10291490-2', '10291490-3', '10291490-4'],
        category: 'shoes',
        quantity: 1
      },
      {
        id: 'product-10052673',
        description:
          'COLLUSION Unisex printed puffer jacket with removeable hood',
        url:
          'https://www.asos.com/collusion/collusion-unisex-printed-puffer-jacket-with-removeable-hood/prd/10052673',
        price: 45,
        images: ['10052673-1-multi', '10052673-2', '10052673-3', '10052673-4'],
        category: 'jackets',
        quantity: 1
      },
      {
        id: 'product-11099533',
        description: 'Pull&Bear Rolling Stones rainbow t-shirt',
        url:
          'https://www.asos.com/pullbear/pullbear-rolling-stones-rainbow-t-shirt/prd/11099533',
        price: 15.99,
        images: ['11099533-1-black', '11099533-2', '11099533-3', '11099533-4'],
        category: 'tops',
        quantity: 1
      }
    ],
    quantity: 3,
    focusedItem: null
  };

  handleDeleteItem = index => {
    //todo confirm deletion
    this.setState(prevState => ({
      selectedItems: [
        ...prevState.selectedItems.slice(0, index),
        ...prevState.selectedItems.slice(index + 1)
      ],
      quantity: prevState.quantity - 1,
      focusedItem: null,
      scrollToItem: false
    }));
  };

  changeItemQuantity = (amount, index, scrollToItem = false) => {
    //item cannot be deleted with this method
    if (amount < 0 && this.state.selectedItems[index].quantity === 1) return;

    this.setState(prevState => ({
      selectedItems: [
        ...prevState.selectedItems.slice(0, index),
        {
          ...prevState.selectedItems[index],
          quantity: prevState.selectedItems[index].quantity + amount
        },
        ...prevState.selectedItems.slice(index + 1)
      ],
      quantity: prevState.quantity + amount,
      focusedItem: prevState.selectedItems[index].id,
      scrollToItem
    }));
  };

  handleAddItem = productId => {
    //check if item is already in list
    const index = findItemIndex(productId, this.state.selectedItems);
    // increase quantity of existing item
    if (index !== -1) {
      this.changeItemQuantity(1, index, true);
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
          focusedItem={this.state.focusedItem}
          scrollToItem={this.state.scrollToItem}
        />
      </CreateContainer>
    );
  }
}
export default Create;

const CreateContainer = styled.div`
  display: flex;
  flex: 1 1 0;
`;
