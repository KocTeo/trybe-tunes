import React, { useState } from 'react';

import BackgroundStyle from '../styles/SearchStyle/BackgroundStyle';
import SearchStyle from '../styles/SearchStyle/SearchStyle';

// import Header from '../components/Header';
import Header from './Header';

import CardAlbum from '../components/CardAlbum';
import Loading from '../pages/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

const Search = () => {
  const [disable, setDisable] = useState(true);
  const [searchTerm, setSearchTerm] = useState();
  const [artistName, setArtistName] = useState();
  const [loading, setLoading] = useState(false);
  const [responseApi, setResponseApi] = useState(false);
  const [albuns, setAlbuns] = useState();

  function enableSeachButton({ target }) {
    const minLength = 2;
    setSearchTerm(target.value);
    return target.value.length >= minLength
      ? setDisable(false)
      : setDisable(true);
  }

  async function handleSeachButton() {
    setLoading(true);
    const results = await searchAlbumsAPI(searchTerm);
    console.log(results);
    setAlbuns(results);
    setArtistName(searchTerm);
    setSearchTerm('');
    setLoading(false);
    setResponseApi(true);
  }

  return (
    <div>
      <BackgroundStyle>
        <Header />
        { loading ? <Loading /> : (
          <SearchStyle data-testid="page-search">
            <input
              value={ searchTerm }
              type="text"
              id="search-artist-input"
              onChange={ enableSeachButton }
              placeholder="Artista ou Album"
            />
            <button
              data-testid="search-artist-button"
              type="button"
              disabled={ disable }
              onClick={ handleSeachButton }
            >
              Pesquisar
            </button>
          </SearchStyle>)}
        <h2 id="result-title">
          Resultado de álbuns de
          { ' ' }
          { artistName }
        </h2>
        { responseApi && albuns.length > 0 ? (
          albuns.map((album) => (
            <CardAlbum
              key={ album.collectionId }
              artistName={ album.artistName }
              collectionName={ album.collectionName }
              artworkUrl100={ album.artworkUrl100 }
              collectionId={ album.collectionId }
            />))
        )
          : (<span style={ { marginLeft: '230px' } }>Nenhum álbum foi encontrado</span>) }
      </BackgroundStyle>
    </div>
  );
};

export default Search;
