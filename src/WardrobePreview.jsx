import React from 'react';
import './styles/WardrobePreview.sass';
import productData from './productData';
import styled from 'styled-components';

const margin = '20px';

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
const WardrobePreview = () => {
  const selected = [
    productData.shoes[20],
    productData.jackets[4],
    productData.bottoms[4]
  ];

  const listofSelected = selected.map((item, index) => {
    console.log(item);
    return (
      <Item key={item.id}>
        <ImageContainer>
          <Image src={`./images/products/${item.images[0]}`} />
        </ImageContainer>

        <div className="item__body">
          <div className="item__body__description">{item.description}</div>
          <div className="item__body__price">{item.price}</div>
          <div className="item__body__view">view</div>
        </div>
        <div className="item__delete">
          <i className="fas fa-minus-square" />
        </div>
      </Item>
    );
  });
  return (
    <div className="wardrobe-preview__container">
      <h3 className="wardrobe-preview__title">Wardrobe</h3>
      {listofSelected}
      <div className="button-area">
        <div className="button button--save">Save</div>
        <div className="button button--share">Share</div>
      </div>
    </div>
  );
};
export default WardrobePreview;
