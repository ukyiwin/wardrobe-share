import React, { Component } from 'react';
import styled from 'styled-components';
import { fonts, colors, margin } from '../../styles/theme.js';

const SecondaryNavContainer = styled.ul`
  margin: 0;
  padding: ${margin.half} ${margin.full};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavItem = styled.li`
  display: inline-block;
  list-style-type: none;
  font-family: ${fonts.primary};
  color: black;
  cursor: pointer;
`;

const Searchbox = styled.div`
  display: flex;
  align-items: center;
  font-family: ${fonts.secondary};
  font-size: 1.2rem;
  color: ${colors.lightGrey};
`;

const SearchInput = styled.input`
  border: none;
  margin-left: ${margin.half};
  font-size: 1.1rem;
  color: ${colors.lightGrey};
  padding: 5px 10px;
  border-bottom: 1px solid ${colors.lightGrey};
  outline: none;

  ::placeholder {
    font-size: 1rem;
  }
`;

const categories = [
  { title: 'Tops', value: 'tops' },
  { title: 'Jackets', value: 'jackets' },
  { title: 'Bottoms', value: 'bottoms' },
  { title: 'Shoes', value: 'shoes' }
];
class SecondaryNav extends Component {
  handleKeyPress = ({ key }) => {
    if (key === 'Enter') {
      this.props.handleSearch();
    }
  };

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
        {navItems}
        <Searchbox>
          <i className="fas fa-search" onClick={this.props.handleSearch} />
          <SearchInput
            placeholder="Search"
            onChange={this.props.handleSearchInputOnChange}
            onKeyPress={this.handleKeyPress}
            value={this.props.inputValue}
          />
        </Searchbox>
      </SecondaryNavContainer>
    );
  }
}

export default SecondaryNav;
