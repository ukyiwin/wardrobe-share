import React, { Component } from 'react';
import productData from './productData';
import styled from 'styled-components';
import { fonts, colors } from './styles/theme.js';
import { flexRow } from './globalStyles';
const margin = '20px';

const SecondaryNavContainer = styled.div`
  ${flexRow}
`;

const NavItem = styled.li`
  display: inline-block;
  list-style-type: none;
  margin-right: 4rem;
  font-family: ${fonts.primaryFont};
  color: black;
  cursor: pointer;
`;

const Searchbox = styled.div`
  display: flex;
  color: ${colors.lightGrey};
  font-size: 1.3rem;
  font-family: ${fonts.secondaryFont};
  margin-left: auto;
`;

const SearchInput = styled.input`
  border: none;
  margin: 0 ${margin};
  font-size: 1.1rem;
  color: ${colors.lightGrey};
  outline: none;
  ::placeholder {
    font-size: 1.1rem;
  }
`;

const categories = [
  { title: 'Tops', value: 'tops' },
  { title: 'Jackets', value: 'jackets' },
  { title: 'Bottoms', value: 'bottoms' },
  { title: 'Shoes', value: 'shoes' }
];
class SecondaryNav extends Component {
  items = productData.tops.slice(0, 20);

  render() {
    const navItems = categories.map(({ title, value }, index) => (
      <NavItem
        key={index}
        onClick={() => this.props.handleSelectNavItem(value)}
      >
        {title}
      </NavItem>
    ));

    return (
      <SecondaryNavContainer>
        <ul>{navItems}</ul>
        <Searchbox>
          <form>
            <span>
              <i className="fas fa-search" onClick={this.props.handleSearch} />
            </span>
            <SearchInput
              placeholder="Search"
              onChange={this.props.handleSearchInputOnChange}
              value={this.props.inputValue}
            />
          </form>
        </Searchbox>
      </SecondaryNavContainer>
    );
  }
}

export default SecondaryNav;
