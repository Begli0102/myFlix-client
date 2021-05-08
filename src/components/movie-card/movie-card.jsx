import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './movie-card.scss';

  export class MovieCard extends React.Component {
  render() {
    
    const { movieData, onMovieClick } = this.props;

    return (

      <Card border="primary">
  <Card.Img variant="top" src={movieData.ImagePath} />
  <Card.Body>
    <Card.Title>{movieData.Title}</Card.Title>
    <Card.Text>
    {movieData.Description}
    </Card.Text>
    <Button variant="primary" size="md" block onClick={() => { onMovieClick(movieData.Title) }}>Open</Button>
  </Card.Body>
</Card>

    )

  }
}

MovieCard.propTypes = {
  movieData: PropTypes.object.isRequired,
};
