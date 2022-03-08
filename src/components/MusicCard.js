import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from '../pages/Loading';

class MusicCard extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      favorite: false,
    };
  }

  refreshFavMusics = async ({ target }) => {
    const { name, checked } = target;
    const { dataMusic } = this.props;
    this.setState({
      [name]: checked,
      loading: true,
    });

    await addSong(dataMusic);
    this.setState({ loading: false });
  }

  render() {
    const { musicName, player, trackId } = this.props;
    const { loading, favorite } = this.state;
    return (
      <div>
        { loading ? <Loading /> : (
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
                checked={ favorite }
                name="favorite"
                onChange={ this.refreshFavMusics }
              />
            </label>
          </div>
        )}
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
