import React from 'react';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
// import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

import './movie-view.scss';

import { Card } from 'react-bootstrap';


export class MovieView extends React.Component {

   componentDidMount() {
    document.addEventListener('keypress', event => {
      console.log(event.key);
  });
  }

  

  render() {
    
    const { movieData } = this.props;
    return (
      <Card className="movie-view-card" >
        <Card.Header>
            <Card.Img 
                className="movie-image" variant="top" src={movieData.ImagePath} alt={ movieData.Title } 
            />
            </Card.Header>
            <Card.Body className='body'>
                <Card.Title className='title'>{ movieData.Title }</Card.Title>
                <Card.Text className="text-muted">Description :</Card.Text>
                <Card.Text>{ movieData.Description }</Card.Text>
                <Card.Text className="text-muted">Directed by :</Card.Text>
                <Link to={`/director/${movieData.Director.Name}`}>
                    <Button variant="link">{ movieData.Director.Name }</Button>
                </Link>
                <Card.Text className="text-muted">Genre :</Card.Text>
                <Link to={`/genre/${movieData.Genre.Name}`}>
                  <Button variant="link">{ movieData.Genre.Name }</Button> </Link>
                    {/* { movieData.Genre.map( genre => <ListGroup.Item variant="dark" key={genre.Name}>{ genre.Name }</ListGroup.Item>) } */}
                <Link to={"/"}>
                    <Button variant="primary" size="lg" block>Back</Button>
                </Link>
            </Card.Body>
        </Card>
    );
  }
}
MovieView.propTypes = {
  movieData: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
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
    ImagePath: PropTypes.string.isRequired,
    Featured: PropTypes.bool
  }).isRequired
  
};
