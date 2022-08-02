import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import HeaderStyle from '../styles/HeaderStyle/HeaderStyle';

const Header = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    const getUserFunc = async () => {
      const user = await getUser();
      setName(user.name);
    };
    getUserFunc();
  }, []);

  return (
    <HeaderStyle data-testid="header-component">
      <h2 data-testid="header-user-name">{name}</h2>
      <h1>TrybeTunes</h1>
      <nav>
        <Link
          to="/search"
          data-testid="link-to-search"
          className="links"
        >
          Search
        </Link>
        <Link
          to="/favorites"
          data-testid="link-to-favorites"
          className="links"
        >
          Favorites
        </Link>
        <Link
          to="/profile"
          data-testid="link-to-profile"
          className="links"
        >
          Profile
        </Link>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
