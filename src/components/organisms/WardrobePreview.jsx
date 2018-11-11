import React, { Component } from 'react';
import styled from 'styled-components';
import Textarea from 'react-textarea-autosize';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Count from '../atoms/Count';
import WadrobeItemCard from '../molecules/WardrobeItemCard';
import { button } from '../../styles/globalStyles.js';
import { fonts, colors, margin } from '../../styles/theme.js';

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

class WardrobePreview extends Component {
  state = {
    description:
      "I've put together the must have pieces to start your capsule wardrobe with classic London street style...",
    animate: false
  };

  componentDidUpdate(prevProps) {
    if (this.props.quantity > prevProps.quantity) {
      this.animateCount();
    }
  }

  handleDescriptionOnChange = ({ target: { value } }) => {
    this.setState({
      description: value
    });
  };

  animateCount = () => {
    this.setState({ animate: true });
    setTimeout(() => {
      this.setState({ animate: false });
    }, 200);
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
      quantity,
      total
    } = this.props;

    const ItemCards = selectedItems.map((item, index) => (
      <CSSTransition key={item.id} timeout={200} classNames="fade">
        <WadrobeItemCard
          key={index}
          item={item}
          index={index}
          changeItemQuantity={changeItemQuantity}
          handleDeleteItem={handleDeleteItem}
        />
      </CSSTransition>
    ));

    return (
      <Container>
        <Header>
          <h3>Your New Wardrobe</h3>
          <span>
            <Count
              pose={this.state.animate ? 'attention' : 'normal'}
              poseKey={quantity}
            >
              {quantity}
            </Count>
            Items
          </span>
        </Header>
        <div className="items">
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
