import React from 'react';
import Search from './ItemSearch';
import WardrobePreview from './WardrobePreview';
import styled from 'styled-components';

const CreateContainer = styled.div`
  flex: 1
  display: flex
  min-height: 100%
`;

const Create = () => (
  <CreateContainer>
    <Search />
    <WardrobePreview />
  </CreateContainer>
);
export default Create;
