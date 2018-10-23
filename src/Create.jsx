import React from 'react';
import Search from './ItemSearch';
import WardrobePreview from './WardrobePreview';
import './styles/Create.sass';
const Create = () => (
  <div className="create-container">
    <Search />
    <WardrobePreview />
  </div>
);
export default Create;
