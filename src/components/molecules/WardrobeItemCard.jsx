import React from 'react';
import styled from 'styled-components';
import { clickable, disabled, fade } from '../../styles/globalStyles';
import { fonts, colors, margin } from '../../styles/theme';

const Item = styled.div`
  display: flex;
  margin: ${margin.full} 0;
  ${fade}
  p {
    color: ${colors.lightGrey};
    margin: ${margin.half} 0;
  }

  .body {
    flex: 1 1 0;
    margin: 0 ${margin.full};
  }

  .description {
    font-family: ${fonts.primary};
  }
`;

const Image = styled.div`
  width: 100px;
  img {
    width: 100%;
  }
`;

const Quantity = styled.div`
  color: ${colors.lightGrey};
  span {
    margin-left: 0.2rem;
  }
`;

const Icon = styled.i`
  ${props => (props.disabled ? disabled : clickable)}
  font-size: 1.2rem;
  margin-left: 0.2rem;
`;

function WadrobeItemCard(props) {
  const { changeItemQuantity, handleDeleteItem, index, item } = props;
  return (
    <Item>
      <Image>
        <img
          src={`./images/products/${item.images[0]}`}
          alt={item.description}
        />
      </Image>
      <div className="body">
        <div className="description">{item.description}</div>
        <p>£{item.price.toFixed(2)}</p>
        <Quantity>
          quantity: {item.quantity}
          <span>
            <Icon
              disabled={item.quantity === 1}
              className="far fa-minus-square"
              onClick={() => changeItemQuantity(-1, index)}
            />
            <Icon
              className="far fa-plus-square"
              onClick={() => changeItemQuantity(1, index)}
            />
          </span>
        </Quantity>
        <p>view</p>
      </div>
      <Icon className="fas fa-times" onClick={() => handleDeleteItem(index)} />
    </Item>
  );
}

export default WadrobeItemCard;
