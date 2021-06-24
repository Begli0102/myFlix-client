import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import Badge from 'react-bootstrap/Badge';
// import Row from 'react-bootstrap/Row';
// import {PropTypes} from 'prop-types';

const FavouriteMovie = ({ movieData, favoriteMovies }) => {
  
const RemoveFavourite =(favoriteMovies) =>{


    let username = localStorage.getItem('user');
    let token = localStorage.getItem('token');
    let url= `https://myflix01025.herokuapp.com/users/${username}/movies/${favoriteMovies._id}`
    axios.delete(url,{headers: {
        Authorization: `Bearer ${token}`}
    })
      .then((response) => {
          const data = response.data;
          alert("The movie has been deleted from your favorites movie.");
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
    <div>
      <Card className="FavouriteMovie" >
        <div>
          <h1 className="h1 m-3">Favourite Movies</h1>
          <div className="card-group">
            {
              favoriteMovies && favoriteMovies.map((favorite) => {
                return (
                  <Card className='favourite-movie' key={favorite._id} className="w-50 m-3 h-50">
                    <Card.Header className='header'>
                      <Card.Img
                        variant="top"
                        src={favorite.ImagePath}
                      />
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>{favorite.Title}</Card.Title>
                      <Card.Text>
                        {favorite.Description}
                        {favorite.Genre.Name}
                      </Card.Text>
                      <Button
                        size="sm"
                        block
                        className="mt-auto"
                        variant="danger"
                        onClick={()=>RemoveFavourite(favorite)}
                      >
                        Delete from favourites
                      </Button>
                    </Card.Body>
                  </Card>
                )
              })
            }
          </div>
        </div>
      </Card>
    </div>
  )
}
export default FavouriteMovie;