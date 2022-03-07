import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      name: '',
    };
  }

  componentDidMount = async () => {
    const user = await getUser();
    this.setState({
      name: user.name,
      loading: false,
    });
  }

  render() {
    const { loading, name } = this.state;
    return (
      loading ? <Loading /> : (
        <header data-testid="header-component">
          <h1>TrybeTunes</h1>
          <Link to="/search" data-testid="link-to-search">Search</Link>
          <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
          <Link to="/profile" data-testid="link-to-profile">Profile</Link>
          <h2 data-testid="header-user-name">{name}</h2>
        </header>
      )
    );
  }
}

export default Header;
