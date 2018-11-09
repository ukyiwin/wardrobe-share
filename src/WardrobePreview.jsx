import React, { Component } from 'react';
import './styles/WardrobePreview.sass';
import productData from './productData';
import styled from 'styled-components';
import { clickable } from './globalStyles.js';

import { fonts, colors } from './styles/theme.js';
const margin = '20px';
const halfMargin = '10px';

const ImageContainer = styled.div`
  width: 100px;
`;
const Image = styled.img`
  width: 100%;
`;

const Item = styled.div`
  display: flex;
  margin: ${margin} 0;
  p {
    color: ${colors.lightGrey};
    margin: ${halfMargin} 0;
  }
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.lightGrey};
`;
const DescriptionLabel = styled.p`
  font-family: ${fonts.secondaryFont};
  margin: 1rem 0 0.5rem;
`;

const WardrobeDescription = styled.textarea`
  width: 100%;
  height: 8rem;
  font-family: ${fonts.primaryFont};
  font-size: 1rem;
  padding: 1rem;
  color: ${colors.lightGrey}
  border: 1px solid ${colors.lightGrey};
`;

const Icons = styled.span`
  margin-left: 0.2rem;
  i {
    font-size: 1.2rem;
    margin-left: 0.2rem;
    cursor: pointer;
    ${clickable}
  }
`;
class WardrobePreview extends Component {
  state = {
    description:
      'When you think of edgy style, I’m sure ripped jeans, chains, studs, and leather immediately come to mind. But it can be as subtle or extreme as you like. With this wardrobe, rock a minimal, but edgy ensemble.'
  };
  handleDescriptionOnChange = ({ target: { value } }) => {
    this.setState({
      description: value
    });
  };
  render() {
    const {
      selectedItems,
      changeItemQuantity,
      handleDeleteItem,
      quantity
    } = this.props;
    const listofSelected = selectedItems.map((item, index) => {
      return (
        <Item key={index}>
          <ImageContainer>
            <Image src={`./images/products/${item.images[0]}`} />
          </ImageContainer>
          <div className="item__body">
            <div className="item__body__description">{item.description}</div>
            <p>{item.price}</p>
            <Quantity>
              quantity: {item.quantity}
              <Icons>
                <i
                  className="far fa-minus-square"
                  onClick={() => changeItemQuantity(-1, index)}
                />
                <i
                  className="far fa-plus-square"
                  onClick={() => changeItemQuantity(1, index)}
                />
              </Icons>
            </Quantity>
            <p>view</p>
          </div>
          <div className="item__delete">
            <i
              className="fas fa-times"
              onClick={() => handleDeleteItem(index)}
            />
          </div>
        </Item>
      );
    });
    return (
      <div className="wardrobe-preview__container">
        <h3 className="wardrobe-preview__title">
          Your New Wardrobe ({quantity} Items)
        </h3>
        <DescriptionLabel>Description</DescriptionLabel>
        <WardrobeDescription
          value={this.state.description}
          onChange={this.handleDescriptionOnChange}
        />
        {listofSelected}
        <div className="button-area">
          <div className="button button--save">Save</div>
          <div className="button button--share">Share</div>
        </div>
      </div>
    );
  }
}
export default WardrobePreview;
