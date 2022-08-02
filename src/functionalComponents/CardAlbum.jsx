import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import CardAlbumStyle from '../styles/CardAlbumStyle/CardAlbumStyle';

const CardAlbum = (props) => {
  const { artistName, collectionName, artworkUrl100, collectionId } = props;
  return (
    <CardAlbumStyle>
      <Link
        className="link-album"
        to={ `/album/${collectionId}` }
        data-testid={ `link-to-album-${collectionId}` }
        albumId={ collectionId }
      >
        <div>
          <img src={ artworkUrl100 } alt={ collectionName } />
          <h3>{ collectionName }</h3>
          <h5>{ artistName }</h5>
        </div>
      </Link>
    </CardAlbumStyle>
  );
};

CardAlbum.propTypes = {
  artistName: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
  artworkUrl100: PropTypes.string.isRequired,
  collectionId: PropTypes.string.isRequired,
};

export default CardAlbum;
