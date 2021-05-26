import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { setFavoriteMovies } from '../../actions/actions';
import axios from "axios";

import './movie-card.scss';

import { Link } from "react-router-dom";

  export class MovieCard extends React.Component {
    handleAdd() {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");
      axios.post(`https://myflix01025.herokuapp.com/users/${user}` + "/movies/" +
        this.props.movieData._id, {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
        .then((response) => {
          console.log(response);
          alert(this.props.movieData.Title + " has been added to your favorites movie.");
        })
    }
  render() {
    
    const { movieData} = this.props;

    return (
      

      <Card className='movie-card' border="primary">
     <Card.Header className='header'>
  <Card.Img  className='card-img-top' variant="top" src={movieData.ImagePath}  />
  </Card.Header> 
  <Card.Body>
    <Card.Title>{movieData.Title}</Card.Title> 
     <Card.Text>
    {movieData.Description}
    </Card.Text> 
    <Link to={`/movies/${movieData._id}`}>
        <Button variant="secondary" size="md" block> View Details</Button>
    </Link>
    <Link to={`/movies/${movieData._id}`}>
            <Button className="mb-2" block variant="primary" onClick={() => this.handleAdd(movieData)}>Add to favourite</Button>
          </Link>
    </Card.Body>
</Card>

    );

  }
}

MovieCard.propTypes = {
//    movieData: PropTypes.object.isRequired,
};

export default setFavoriteMovies;