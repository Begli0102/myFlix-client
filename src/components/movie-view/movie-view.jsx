import React from 'react';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import './movie-view.scss';

export class MovieView extends React.Component {

  componentDidMount() {
    document.addEventListener('keypress', event => {
      console.log(event.key);
    });
  }

  render() {
    const { movieData,onBackClick } = this.props;

    return (
      <Modal.Dialog>
  <Modal.Header>
      <div className="movie-title">
       <span className="label">Title: </span>
      <span className="value">{movieData.Title}</span>
      </div>
  </Modal.Header>

  <Modal.Body>
  <div className="movie-description">
        <span className="label">Description: </span>
       <span className="value">{movieData.Description}</span>
      </div>
      <div className="director">
      <span className="label">Director: </span>
       <span className="value">{movieData.Director}</span>
      </div>
      <div className="genre">
        <span className="label">Genre: </span>
        <span className="value">{movieData.Genre}</span>
      </div>
  </Modal.Body>

  <Modal.Footer>
  <Button variant="secondary" onClick={() => {onBackClick(null);}}>Close</Button>
  </Modal.Footer>
</Modal.Dialog>
      
    );
  }
  
}
MovieView.propTypes = {
  movieData: PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      ImagePath: PropTypes.string.isRequired,
      Genre: PropTypes.shape({
          Name: PropTypes.string.isRequired,
          Description: PropTypes.string.isRequired,
      }),
      Director: PropTypes.shape({
          Name: PropTypes.string.isRequired,
          Bio: PropTypes.string.isRequired,
          Birth: PropTypes.string.isRequired,
          Death: PropTypes.string,
      }),
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};