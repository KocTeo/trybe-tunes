import React, { Component } from 'react';
import Header from '../components/Header';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      disable: true,
    };
  }

  enableSeachButton = ({ target }) => {
    const minLength = 2;
    return target.value.length >= minLength
      ? this.setState({ disable: false })
      : this.setState({ disable: true });
  }

  render() {
    const { disable } = this.state;
    return (
      <div>
        <Header />
        <form data-testid="page-search">
          <input
            type="search"
            data-testid="search-artist-input"
            onChange={ this.enableSeachButton }
          />
          <button
            data-testid="search-artist-button"
            type="button"
            disabled={ disable }
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
