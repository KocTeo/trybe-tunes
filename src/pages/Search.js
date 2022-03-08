import React, { Component } from 'react';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';
import CardAlbum from '../components/CardAlbum';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      disable: true,
      searchTerm: '',
      artistName: '',
      loading: false,
      responseApi: false,
      albuns: [],
    };
  }

  enableSeachButton = ({ target }) => {
    const minLength = 2;
    return target.value.length >= minLength
      ? this.setState({ disable: false, searchTerm: target.value })
      : this.setState({ disable: true, searchTerm: target.value });
  }

  handleSeachButton = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });
    const results = await searchAlbumsAPI(searchTerm);
    this.setState({
      albuns: results,
      artistName: searchTerm,
      searchTerm: '',
      loading: false,
      responseApi: true,
    });
  }

  render() {
    const {
      disable, searchTerm,
      loading, responseApi,
      artistName, albuns,
    } = this.state;
    return (
      <div>
        <Header />
        { loading ? <Loading /> : (
          <form data-testid="page-search">
            <input
              value={ searchTerm }
              type="search"
              data-testid="search-artist-input"
              onChange={ this.enableSeachButton }
              placeholder="Artista ou Album"
            />
            <button
              data-testid="search-artist-button"
              type="button"
              disabled={ disable }
              onClick={ this.handleSeachButton }
            >
              Pesquisar
            </button>
          </form>)}
        <h2>
          Resultado de álbuns de:
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
          : (<span>Nenhum álbum foi encontrado</span>) }
      </div>
    );
  }
}

export default Search;
