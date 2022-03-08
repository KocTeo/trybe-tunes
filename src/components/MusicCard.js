import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Loading from '../pages/Loading';

class MusicCard extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      favorite: false,
      favoriteMusics: [],
      loadFav: false,
    };
  }

  componentDidMount() {
    this.getFavoriteMusics();
  }

  getFavoriteMusics = async () => {
    this.setState({ loadFav: true });
    const favMusics = await getFavoriteSongs();
    this.setState({ favoriteMusics: favMusics, loadFav: false });

    const { favoriteMusics } = this.state;
    const { trackId } = this.props;
    favoriteMusics.map((music) => (
      music.trackId === trackId ? this.setState({ favorite: true }) : false));
  }

  refreshFavMusics = async ({ target }) => {
    const { name, checked } = target;
    const { dataMusic } = this.props;
    const { favorite } = this.state;
    this.setState({ loading: true });

    if (favorite) {
      await removeSong(dataMusic);
      this.setState({ favorite: false });
    } else {
      await addSong(dataMusic);
    }
    this.setState({
      [name]: checked,
      loading: true,
    });

    this.setState({ loading: false });
    this.getFavoriteMusics();
  }

  render() {
    const { musicName, player, trackId } = this.props;
    const { loading, favorite, loadFav } = this.state;
    return (
      <div>
        <p>{ musicName }</p>
        <audio data-testid="audio-component" controls>
          <source src={ player } />
          <track kind="captions" />
          O seu navegador não suporta esse arquivo
        </audio>
        <label htmlFor={ trackId } data-testid={ `checkbox-music-${trackId}` }>
          Favorita
          <input
            id={ trackId }
            type="checkbox"
            checked={ !!favorite }
            name="favorite"
            onChange={ this.refreshFavMusics }
          />
        </label>
        { loading && <Loading /> }
        { loadFav && <Loading /> }
      </div>
    );
  }
}

MusicCard.propTypes = {
  musicName: PropTypes.string.isRequired,
  player: PropTypes.string.isRequired,
  trackId: PropTypes.string.isRequired,
  dataMusic: PropTypes.shape({ dataMusic: PropTypes.string.isRequired }).isRequired,
};

export default MusicCard;
