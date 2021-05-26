import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
// import {PropTypes} from 'prop-types';

const FavouriteMovie = ({movieData,userInfo}) => {
  
  // const{movieData} = this.props;

  const handleRemoveFavourite = () => {
    const username = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    
    axios({
      method: 'put',
      url: `https://myflix-20210211.herokuapp.com/users/${username}/movies/${movieData.id}`, //id
      
      headers: { 
        Authorization: `Bearer ${token}` 
      }
    })
    .then(
      (response) => {
        const data = response.data;
        console.log(data);
        window.open(
          `/users/${username}`,
          '_self'
        );
      }
    )
    .catch(
      (err) => {
        console.log(err);
      }
    )
  }


  return (
 
    <Card className="FavouriteMovie" >
      <div>
      <h1 className="h1">Favourite Movies</h1>

      <Card className='favourite-movie' border="primary">
     <Card.Header className='header'>
     <Link to={`/movies/${movieData.id}`}>//id
        <Card.Img
          variant="top"
          src={movieData.ImagePath}
        />
        </Link>  </Card.Header> 
  <Card.Body>
    <Card.Title>{movieData.Title}</Card.Title> 
     <Card.Text>
    {movieData.Description}
    {movieData.Genre.Name}
    </Card.Text> 
    <Button
          size="sm"
          block
          className="mt-auto"
          variant="danger"
          onClick={ handleRemoveFavourite}
          >
            Delete from favourites
        </Button>
    </Card.Body>
</Card>
    </div>
    </Card>
    
  )
}

export default FavouriteMovie;