import React, { Component, Fragment } from 'react';
import './styles/ItemSearch.sass';
import productData from './productData';
import styled from 'styled-components';

const margin = '20px';
const gridMargin = '10px';

const ProductCard = styled.div`
  position: relative;
  width: 33.33%;
  padding: ${gridMargin};
`;

const ProductImageContainer = styled.div`
  position: relative;
`;
const ProductImage = styled.img`
  font-size: 1.5em;
  text-align: center;
  width: 100%;
  cursor: pointer;
`;

const AddIcons = styled.i`
  color: white;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  opacity: 0.8;
  font-size: 2rem;
  cursor: pointer;
`;

const ProductDesription = styled.p`
  margin: 0.5em 0;
  color: grey;
  height: 2.3rem;
`;
const ProductPrice = styled.p`
  margin: 0.5em 0 0.5em;
  color: grey;
`;

const Products = styled.div`
  flex: 1 1 0;
  display: flex;
  padding-top: ${margin};
  margin-left: -${gridMargin}
  width: 100%;
  flex-wrap: wrap;
`;
class ItemSearch extends Component {
  items = productData.tops.slice(0, 20);

  render() {
    const items = this.items.map(item => {
      return (
        <ProductCard key={item.id}>
          <ProductImageContainer>
            <ProductImage src={`./images/products/${item.images[0]}`} />
            <AddIcons className="fas fa-plus-square" />
          </ProductImageContainer>
          <ProductDesription>{item.description}</ProductDesription>
          <ProductPrice>{item.price}</ProductPrice>
        </ProductCard>
      );
    });
    return (
      <div className="item-search-container">
        {/* todo: secondary nav */}
        <div className="searchbox">
          <i className="fas fa-search" />
          <input placeholder="Search" />
        </div>
        <div className="item-search-results">
          <div>
            Your search results for
            <span className="searchQuery"> "long sleeved tops"</span>
          </div>
          <div>20 styles found</div>
        </div>
        <Products>{items}</Products>
      </div>
    );
  }
}

export default ItemSearch;
