import React, { Component, createRef } from 'react';
import styled from 'styled-components';
import productDataCategories from '../../data/productData';
import productDataAll from '../../data/productDataAll';
import BrowseItemCard from '../molecules/BrowseItemCard';
import SecondaryNav from './SecondaryNavBar';
import { fonts, colors, margin } from '../../styles/theme';

class Browse extends Component {
  state = {
    items: productDataCategories.tops.slice(0, 20),
    searchInput: 'long sleeved tops',
    searchQuery: '',
    searchResultReturned: true
  };

  productsRef = createRef();

  componentDidMount() {
    this.handleSearch();
  }

  handleSelectNavItem = category => {
    this.setState({
      items: [...productDataCategories[category]],
      searchInput: '',
      searchQuery: '',
      searchResultReturned: false
    });
  };

  handleSearchInputOnChange = ({ target: { value }, key }) => {
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
      searchQuery: prevState.searchInput,
      searchResultReturned: true
    }));
    this.productsRef.current.scrollTop = 0;
  };

  render() {
    const { items, searchQuery } = this.state;
    const { handleAddItem } = this.props;

    const itemCards = items.map(item => (
      <BrowseItemCard key={item.id} item={item} handleAddItem={handleAddItem} />
    ));

    return (
      <Container>
        <SecondaryNav
          handleSelectNavItem={this.handleSelectNavItem}
          handleSearchInputOnChange={this.handleSearchInputOnChange}
          handleSearch={this.handleSearch}
          inputValue={this.state.searchInput}
        />
        <Products ref={this.productsRef}>
          {this.state.searchResultReturned && (
            <ResultSummary>
              <div>
                Your search results for
                <SearchQuery> "{searchQuery}"</SearchQuery>
              </div>
              {items.length} styles found
            </ResultSummary>
          )}
          {itemCards}
        </Products>
      </Container>
    );
  }
}

export default Browse;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  border-right: 0.5px solid ${colors.lightGrey};
  color: ${colors.lightGrey};
`;

const Products = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-wrap: wrap;
  padding: ${margin.half} ${margin.half} ${margin.full} ${margin.full};
  overflow-y: auto;
`;

const ResultSummary = styled.div`
  width: 100%;
`;
const SearchQuery = styled.span`
  font-family: ${fonts.primary};
  font-weight: 700;
  color: black;
`;
