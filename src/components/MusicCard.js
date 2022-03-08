import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicCard extends Component {
  render() {
    const { musicName, player } = this.props;

    return (
      <div>
        <p>{ musicName }</p>
        <audio data-testid="audio-component" controls>
          <source src={ player } />
          <track kind="captions" />
          O seu navegador não suporta esse arquivo
        </audio>
      </div>
    );
  }
}

MusicCard.propTypes = {
  musicName: PropTypes.string.isRequired,
  player: PropTypes.string.isRequired,
};

export default MusicCard;
