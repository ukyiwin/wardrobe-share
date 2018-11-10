import React, { Component } from 'react';
import Header from '../organisms/Header';
import Create from '../organisms/Create';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Create />
      </Container>
    );
  }
}

export default App;
