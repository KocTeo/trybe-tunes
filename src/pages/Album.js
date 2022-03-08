import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends Component {
  constructor() {
    super();

    this.state = {
      artistName: '',
      collectionName: '',
      musics: [],
    };
  }

  componentDidMount = async () => {
    const { match } = this.props;
    const albumMusics = await getMusics(match.params.id);
    this.setState({
      artistName: albumMusics[0].artistName,
      collectionName: albumMusics[0].collectionName,
      musics: [...albumMusics],
    });
  }

  render() {
    const { artistName, collectionName, musics } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <h2 data-testid="artist-name">{ artistName }</h2>
        <h3 data-testid="album-name">{ collectionName }</h3>
        <section>
          { musics.map((music) => (music.trackName === undefined ? null
            : (
              <MusicCard
                musicName={ music.trackName }
                player={ music.previewUrl }
              />))) }
        </section>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.string.isRequired,
};

export default Album;
