import React, { Component } from 'react';
import Header from './Header';
import Create from './Create';
import './styles/App.sass';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Create />
      </div>
    );
  }
}

export default App;
