import React, { Component } from 'react';
import productData from './productData';
import productDataAll from './productDataAll';

import styled from 'styled-components';
import { fonts, colors } from './styles/theme';
import SecondaryNav from './SecondaryNavBar';
const margin = '20px';
const gridMargin = '10px';

const ItemBrowseContainer = styled.div`
  padding: 0 ${margin} ${margin};
  width: 70%;
  border-right: 0.5px solid ${colors.lightGrey};
  color: ${colors.lightGrey};
  overflow-y: auto;
`;

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
  display: flex;
  padding-top: ${margin};
  margin-left: -${gridMargin}
  width: 100%;
  flex-wrap: wrap;
`;

const SearchQuery = styled.span`
  color: black;
  font-weight: 700;
  font-family: ${fonts.primaryFont};
`;
class Browse extends Component {
  state = {
    items: productData.tops.slice(0, 20),
    searchInput: 'long sleeved tops',
    searchQuery: '',
    searchResultReturned: true
  };
  componentDidMount() {
    this.handleSearch();
  }
  handleSelectNavItem = category => {
    this.setState({
      items: [...productData[category]],
      searchInput: '',
      searchQuery: '',
      searchResultReturned: false
    });
  };
  handleSearchInputOnChange = ({ target: { value } }) => {
    this.setState({ searchInput: value });
  };

  handleSearch = () => {
    //return if empty
    if (!this.state.searchInput) return;
    const words = this.state.searchInput.split(' ').join('|');
    const pattern = new RegExp(words, 'i');
    const items = productDataAll.filter(({ description, id }) => {
      return pattern.test(description);
    });
    this.setState(prevState => ({
      items,
      searchQuery: prevState.searchInput
    }));
  };
  render() {
    const items = this.state.items.map(item => {
      return (
        <ProductCard key={item.id}>
          <ProductImageContainer>
            <ProductImage src={`./images/products/${item.images[0]}`} />
            <AddIcons
              className="fas fa-plus-square"
              onClick={() => this.props.handleAddItem(item.id)}
            />
          </ProductImageContainer>
          <ProductDesription>{item.description}</ProductDesription>
          <ProductPrice>{item.price}</ProductPrice>
        </ProductCard>
      );
    });
    return (
      <ItemBrowseContainer>
        <SecondaryNav
          handleSelectNavItem={this.handleSelectNavItem}
          handleSearchInputOnChange={this.handleSearchInputOnChange}
          handleSearch={this.handleSearch}
          inputValue={this.state.searchInput}
        />
        {this.state.searchResultReturned && (
          <div className="item-search-results">
            <div>
              Your search results for
              <SearchQuery> "{this.state.searchQuery}"</SearchQuery>
            </div>
            <div>{this.state.items.length} styles found</div>
          </div>
        )}
        <Products>{items}</Products>
      </ItemBrowseContainer>
    );
  }
}

export default Browse;
