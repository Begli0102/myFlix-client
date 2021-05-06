import React from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

<<<<<<< HEAD
<<<<<<< Updated upstream
=======
import './main-view.scss';

import  {LoginView} from '../login-view/login-view';
import  {RegistrationView} from '../registration-view/registration-view';
>>>>>>> Stashed changes
=======
import  {LoginView} from '../login-view/login-view';
import  {RegistrationView} from '../registration-view/registration-view';
>>>>>>> myFlix-client-branch
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


     
  //using axios method to fetch movies from heroku
  
  componentDidMount(){
    axios.get('https://myflix01025.herokuapp.com/movies')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }


  setSelectedMovie(movie) {
    this.setState({
      selectedMovie: movie
    });
  }

 onLoggedIn(user) {
  this.setState({
    user
  });
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
<<<<<<< HEAD
<<<<<<< Updated upstream
         <div className="main-view">
           {selectedMovie
             ? <MovieView movieData = {selectedMovie} onBackClick = {(newSelectMovie) => {this.setSelectedMovie(newSelectMovie);}}/>
             : movies.map(movie => (
<MovieCard key={movie._id} movieData={movie} onMovieClick = {(movie) => {this.setSelectedMovie(movie)}} />
             ))
           }
         </div>
  );
=======
     
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
>>>>>>> Stashed changes
=======
     <div className="main-view">
           {selectedMovie
             ? (
             <Row className="justify-content-md-center">
               <Col md={8}>
               <MovieView movieData = {selectedMovie} onBackClick = {(newSelectMovie) => {this.setSelectedMovie(newSelectMovie);}}/>
               </Col>
               </Row>
               )  
             
             : ( 
             <Row className="justify-content-md-center">
               {movies.map(movie => (
               
                <Col md={3}>
                   <MovieCard key={movie._id} movieData={movie} onMovieClick = {(movie) => {this.setSelectedMovie(movie)}} />
                </Col>
                 ))}
                </Row>
             )
              }
           
             </div>
     )
};
>>>>>>> myFlix-client-branch
}

export default MainView;
