import React from 'react';
import PropTypes from 'prop-types';

import Media from 'react-bootstrap/Media';

import './genre-view.scss';

import { Link } from 'react-router-dom';

export function GenreView(props) {
    const { genre } = props;
   
    return (
    
    <Media className="d-flex flex-column  align-items-center ml-md-5 mt-5">
    <Media.Body>
      
      <div className="align-items-center">
        <h4 className="display-4">DESCRIPTION: </h4>
        <p className ='display-5'>{genre.Genre.Name}</p>
        <p>{ genre.Genre.Description }</p>
      </div>
    </Media.Body>
    <Link to='/'>
    <button className="button-genre" >Back</button></Link>
    </Media>
    );
}

GenreView.propTypes = {
    genreData: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Description: PropTypes.string.isRequired
        })
}; 