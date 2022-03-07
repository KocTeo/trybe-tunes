import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    getUser();
  }

  render() {
    const { loading } = this.state;
    return (
      loading ? <Loading /> : (
        <header data-testid="header-component">
          <h1>TrybeTunes</h1>
          <Link to="/search" data-testid="link-to-search">Search</Link>
          <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
          <Link to="/profile" data-testid="link-to-profile">Profile</Link>
        </header>
      )
    );
  }
}

export default Header;
