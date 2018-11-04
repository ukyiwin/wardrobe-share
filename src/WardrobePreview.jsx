import React from 'react';
import './styles/WardrobePreview.sass';
import productData from './productData';
const WardrobePreview = () => {
  const selectedData = [1, 2, 3];
  const listofSelected = selectedData.map((item, index) => (
    <div className="item" key={index}>
      <img className="item__image" />
      <div className="item__body">
        <div className="item__body__description">A lovely summer top</div>
        <div className="item__body__price">$70.00</div>
        <div className="item__body__view">view</div>
      </div>
      <div className="item__delete">
        <i className="fas fa-minus-square" />
      </div>
    </div>
  ));
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
