import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './movie-card.scss';

  export class MovieCard extends React.Component {
  render() {
    
    const { movieData, onMovieClick } = this.props;


     //return <div className="movie-card" onClick={() => { onMovieClick(movieData) }}>{movieData.Title}</div>;

    return (
    <Card  border="primary">
    <Card.Img variant="top" src={movieData.ImagePath} />
      <Card.Body>
         <Card.Title>{movieData.Title}</Card.Title>
         <Card.Text>{movieData.Description}</Card.Text>
         <Button variant="primary" size="md" block onClick={() => { onMovieClick(movieData.Title) }}>Open</Button>
      </Card.Body>
     {/* <Card.Footer>
    <small className="text-muted">Last updated 3 mins ago</small> 
  </Card.Footer>  */}
     </Card>

    )

  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
    }),
    Director: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Bio: PropTypes.string.isRequired
    })
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};