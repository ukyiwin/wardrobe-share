import React from 'react';
import styled from 'styled-components';
import { clickable, fade } from '../../styles/globalStyles.js';
import { margin } from '../../styles/theme';

const Card = styled.div`
  position: relative;
  width: 33.33%;
  padding: ${margin.half} ${margin.half} ${margin.half} 0;
  ${fade}

  p {
    margin: 0.5em 0;
    color: grey;
  }

  .description {
    height: 2.3rem;
  }
`;

const Image = styled.div`
  position: relative;

  img {
    width: 100%;
  }
`;

const AddIcon = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  padding: 0.1rem 0.3rem;
  border-radius: 5px;
  color: black;
  background-color: white;
  font-size: 1.5rem;
  ${clickable}
`;

function BrowseItemCard(props) {
  const { item, handleAddItem } = props;
  return (
    <Card key={item.id}>
      <Image>
        <img
          src={`./images/products/${item.images[0]}`}
          alt={item.description}
        />
        <AddIcon onClick={() => handleAddItem(item.id)}>
          <i className="fas fa-plus" />
        </AddIcon>
      </Image>
      <p className="description">{item.description}</p>
      <p>£{item.price.toFixed(2)}</p>
    </Card>
  );
}

export default BrowseItemCard;
