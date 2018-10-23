import React, { Component } from 'react';
import './styles/ItemSearch.sass';

class ItemSearch extends Component {
  items = [1, 2, 3, 4, 5, 6, 7];
  render() {
    const items = this.items.map(item => (
      <div className="productCard">
        <i class="fas fa-plus-square" />
      </div>
    ));
    return (
      <div className="item-search-container">
        {/* todo: secondary nav */}
        <div className="searchbox">
          <i className="fas fa-search" />
          <input placeholder="Search" />
        </div>
        <div className="item-search-results">
          <div>
            You're search results for
            <span className="searchQuery"> "long sleeved tops"</span>
          </div>
          <div>7 styles found</div>
        </div>
        <div className="products">{items}</div>
      </div>
    );
  }
}

export default ItemSearch;
