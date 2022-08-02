import React, { Component } from 'react';

// import Header from '../components/Header';
import Header from '../functionalComponents/Header';

class Favorites extends Component {
  render() {
    return (
      <div>
        <Header />
        <div data-testid="page-favorites">Favorites</div>
      </div>
    );
  }
}

export default Favorites;
