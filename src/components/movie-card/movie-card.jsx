import React from 'react';

import './movie-card.scss';

  export class MovieCard extends React.Component {
  render() {
    const { movieData, onMovieClick } = this.props;
<<<<<<< Updated upstream
    return <div className="movie-card" onClick={() => { onMovieClick(movieData) }}>{movieData.Title}</div>;
=======
    
    return (
      
    <Card border="primary">
    <Card.Img variant="top" src={movieData.ImagePath} />
      <Card.Body>
         <Card.Title>{movieData.Title}</Card.Title>
         <Card.Text>{movieData.Description}</Card.Text>
         <Button variant="primary" size="md" block  onClick={() => onMovieClick(movie)}>Open</Button>
      </Card.Body>
    <Card.Footer>
    <small className="text-muted">Last updated 3 mins ago</small>
  </Card.Footer>
     </Card>

    )
>>>>>>> Stashed changes
  }
}
