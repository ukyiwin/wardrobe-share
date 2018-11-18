import React, { Component, createRef } from 'react';
import styled from 'styled-components';
import Textarea from 'react-textarea-autosize';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Count from '../atoms/Count';
import WadrobeItemCard from '../molecules/WardrobeItemCard';
import { button } from '../../styles/globalStyles.js';
import { fonts, colors, margin } from '../../styles/theme.js';
import { calculateTotal } from '../../utils';

class WardrobePreview extends Component {
  state = {
    description:
      "I've put together the must have pieces to start your capsule wardrobe with classic London street style...",
    animate: false
  };

  itemsContainerRef = createRef();
  itemRefs = {};

  componentDidUpdate(prevProps) {
    //scroll to bottom of selected items if a new item has been added
    if (prevProps.selectedItems.length < this.props.selectedItems.length) {
      this.itemsContainerRef.current.scroll({
        top: this.itemsContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    } else if (this.props.scrollToItem) {
      this.itemRefs[this.props.focusedItem].scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  handleDescriptionOnChange = ({ target: { value } }) => {
    this.setState({
      description: value
    });
  };

  textAreaStyle = {
    width: '100%',
    height: '8rem',
    fontFamily: fonts.primary,
    fontSize: '1rem',
    padding: '1rem',
    color: colors.lightGrey,
    border: `1px solid ${colors.lightGrey}`
  };

  render() {
    const {
      selectedItems,
      changeItemQuantity,
      handleDeleteItem,
      quantity
    } = this.props;

    const ItemCards = selectedItems.map((item, index) => (
      <CSSTransition key={item.id} timeout={200} classNames="fade">
        <WadrobeItemCard
          ref={el => {
            this.itemRefs[item.id] = el;
          }}
          key={index}
          item={item}
          index={index}
          changeItemQuantity={changeItemQuantity}
          handleDeleteItem={handleDeleteItem}
        />
      </CSSTransition>
    ));

    const total = calculateTotal(this.props.selectedItems);
    return (
      <Container>
        <Header>
          <h3>Your New Wardrobe</h3>
          <span>
            <Count quantity={quantity}>{quantity}</Count>
            Items
          </span>
        </Header>
        <div className="items" ref={this.itemsContainerRef}>
          <DescriptionLabel>Description</DescriptionLabel>
          <Textarea
            value={this.state.description}
            onChange={this.handleDescriptionOnChange}
            style={this.textAreaStyle}
            maxLength="400"
          />
          <TransitionGroup>{ItemCards}</TransitionGroup>
        </div>
        <ButtonArea>
          <div>£{total.toFixed(2)}</div>

          <div>
            <Button color={colors.lightGrey}>Save</Button>
            <Button>Share</Button>
          </div>
        </ButtonArea>
      </Container>
    );
  }
}

export default WardrobePreview;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 100%;

  .items {
    flex: 1 1 0;
    overflow-y: auto;
    padding: 0 ${margin.full};
  }
`;

const Header = styled.div`
  padding:  0 ${margin.full};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 5px 3px -5px rgba(0, 0, 0, 0.3);
  height: 52px;
  z-index: 100;

  h3 {
    margin: 0
    font-family: ${fonts.secondary};
    font-weight: normal;
  }
  span {
      font-family: ${fonts.primary};
      font-size: 1rem;
      line-height: 1.6rem;
      div {
        margin-right: 0.5rem;
      }
    }
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${colors.lightGrey};
  > div {
    margin: 0 ${margin.full};
  }
}
`;

const DescriptionLabel = styled.p`
  font-family: ${fonts.secondary};
  margin: ${margin.half} 0;
`;

const Button = styled.div`
  ${button}
  margin-left: ${margin.full};
  border-color: ${props => (props.color ? props.color : '')};
  
`;
