import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './movie-card.scss';

import { Link } from "react-router-dom";

  export class MovieCard extends React.Component {
  render() {
    
    const { movieData} = this.props;

    return (

      <Card className='movie-card' border="primary">
     <Card.Header className='header'>
  <Card.Img  className=''variant="top" src={movieData.ImagePath}  />
  </Card.Header>
  <Card.Body>
    <Card.Title>{movieData.Title}</Card.Title> 
     <Card.Text>
    {movieData.Description}
    </Card.Text> 
    <Link to={`/movies/${movieData._id}`}>
        <Button variant="secondary" size="md" block>See Details</Button>
        
    </Link>
    </Card.Body>
</Card>

    );

  }
}

MovieCard.propTypes = {
  movieData: PropTypes.object.isRequired,
};
