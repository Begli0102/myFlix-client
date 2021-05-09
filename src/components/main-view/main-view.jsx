import React from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import './main-view.scss';


import  {LoginView} from '../login-view/login-view';
import  {RegistrationView} from '../registration-view/registration-view';

import  {MovieCard}  from '../movie-card/movie-card';
import  {MovieView} from '../movie-view/movie-view';

export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      movies:[ ],
      selectedMovie: null,
      user:null
    };
  }

  keypressCallback(event) {
    console.log(event.key);
  }


  //using axios method to fetch movies from heroku

  
    getMovies(token) {
      axios.get('https://myflix01025.herokuapp.com/movies', {
        headers: { Authorization: `Bearer ${token}`}
      })
      .then(response => {
        // Assign the result to the state
        this.setState({
          movies: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  
    componentDidMount() {
      let accessToken = localStorage.getItem('token');
      if (accessToken !== null) {
        this.setState({
          user: localStorage.getItem('user')
        });
        this.getMovies(accessToken);
      }
    }

  setSelectedMovie(movie) {
    this.setState({
      selectedMovie: movie
    });
  }

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username
    });
  
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

onRegistration(register) {
  this.setState({
      register
  });
}


 render() {
     const {movies, selectedMovie,user,registration} = this.state;

    /* If there is no user, the LoginView is rendered. If there is a user logged in, the user 
    details are *passed as a prop to the LoginView*/
     if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
     if (!user) return <RegistrationView onRegistration={user => this.onRegistraton(user)} />;

     if (movies.length === 0) return <div className = "main-view"></div>;
     return (
     <Row className="main-view justify-content-md-center">
           {selectedMovie
             ? (

               <Col md={8}>
               <MovieView movieData = {selectedMovie} onBackClick = {(newSelectMovie) => {this.setSelectedMovie(newSelectMovie);}}/>
               </Col>

               )

             : (
               movies.map(movie => (

                <Col md={4}>
                   <MovieCard key={movie._id} movieData={movie} onMovieClick = {(movie) => {this.setSelectedMovie(movie)}} />
                </Col>
                 ))

               )
              }
           </Row>

     )
};

};


export default MainView;
