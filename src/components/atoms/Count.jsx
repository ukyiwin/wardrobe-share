import posed from 'react-pose';
import styled from 'styled-components';
import React, { Component } from 'react';

const PosedCount = posed.div({
  attention: {
    scale: 1.3,
    fontSize: '1.1rem'
  },
  default: {
    fontSize: '1rem',
    scale: 1
  }
});

const StyledCount = styled(PosedCount)`
  display: inline-block;
  height: 1.5rem;
  width: 1.5rem;
  background-color: #f2994a;
  border-radius: 50%;
  text-align: center;
  line-height: 1.5rem;
  color: white;
`;

class AnimtedCounter extends Component {
  state = {
    animate: false
  };
  componentDidUpdate(prevProps) {
    if (this.props.quantity > prevProps.quantity) {
      this.animateCount();
    }
  }
  animateCount = () => {
    this.setState({ animate: true });
    setTimeout(() => {
      this.setState({ animate: false });
    }, 200);
  };
  render() {
    return (
      <StyledCount pose={this.state.animate ? 'attention' : 'default'}>
        {this.props.quantity}
      </StyledCount>
    );
  }
}

export default AnimtedCounter;
