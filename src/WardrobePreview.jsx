import React, { Component } from 'react';
import './styles/WardrobePreview.sass';
import productData from './productData';
import styled from 'styled-components';
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
  display: flex
  margin: ${margin} 0
`;

const DescriptionLabel = styled.p`
  font-family: ${fonts.secondaryFont};
  margin: 1rem 0 0.5rem;
`;

const ItemCardDetail = styled.div`
  color: ${colors.lightGrey};
  margin: ${halfMargin} 0;
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
    const listofSelected = this.props.selectedItems.map((item, index) => {
      return (
        <Item key={index}>
          <ImageContainer>
            <Image src={`./images/products/${item.images[0]}`} />
          </ImageContainer>
          <div className="item__body">
            <div className="item__body__description">{item.description}</div>
            <ItemCardDetail>{item.price}</ItemCardDetail>
            <ItemCardDetail>quantity: {item.quantity}</ItemCardDetail>
            <ItemCardDetail>view</ItemCardDetail>
          </div>
          <div className="item__delete">
            <i
              className="fas fa-minus-square"
              onClick={() => this.props.handleDeleteItem(index)}
            />
          </div>
        </Item>
      );
    });
    return (
      <div className="wardrobe-preview__container">
        <h3 className="wardrobe-preview__title">Your New Wardrobe</h3>
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
