import React from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import {Navbar,Nav,Form,FormControl} from "react-bootstrap";
import Container from 'react-bootstrap/Container'

import './main-view.scss';


import  {LoginView} from '../login-view/login-view';
import  {RegistrationView} from '../registration-view/registration-view';

import  {MovieCard}  from '../movie-card/movie-card';
import  {MovieView} from '../movie-view/movie-view';

import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';
import { ProfileView } from '../profile-view/profile-view';

export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      movies:[ ],
      selectedMovie: null,
      user:null
    };
  }

  

  // keypressCallback(event) {
  //   console.log(event.key);
  // }


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
  

//  onRegistration(register) {
//   this.setState({
//       register
//   });
//  }


onLoggedOut() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  this.setState({
    user: null
  });
console.log("logout successful");
  alert("You have been successfully logged out");
  window.open("/", "_self");
}


render() {
  const { movies, user } = this.state;
  
  
  return (  
    <Router>
    
        <Navbar className='navbar' expand="lg" bg="dark" variant="dark">
  <Navbar.Brand  className="navbar-brand">MyFlix App</Navbar.Brand>
 
  <ul>
   <Link to={`/`}>
    <Button variant="link" className="navbar-link" bg='secondary'>Sign In</Button>
  </Link> 
  
  <Link to="/register">
      <Button  className="navbar-link" variant="link" >Register</Button>
       </Link>
</ul>
   
<ul>
<Link to={`/`}>
    <Button variant="link" className="navbar-link">Movies</Button>
  </Link>
 
 
    <Link to={`/`}>
    <Button variant="link" className="navbar-link" onClick={() => this.onLoggedOut()}>Sign Out</Button>
  </Link> 
</ul>

</Navbar>  

       <Row className="main-view justify-content-md-center">
       
          <Route exact path="/" render={() => {
            if (!user)
             return (
              <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
             </Col>
             )
              
      if (movies.length === 0) return <div className="main-view" />;
        //add bootstrap
          return movies.map(movie => (
                 <Col md={4} key={movie._id}>
              <MovieCard movieData={movie} />
            </Col>
          ))
        }} />
        <Route path="/register" render={() => {
          
           if (user) return <Redirect to="/" />
           return <Col>
              <RegistrationView />
              </Col>
                 }} />
       
        <Route exact path="/user" render={() => {
          if (user) return <Redirect to="/" />
                return <Col>
                <ProfileView user={localStorage.getItem('user')}/>;
                </Col>
              }}
            />

        <Route exact path="/movies/:movieId" render={({ match, history }) => {
            if (!user) return <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                </Col>
                   if (movies.length === 0) return <div className="main-view" />;
            return <Col md={8}>
                <MovieView movieData={movies.find(movie=> movie._id === match.params.movieId)} onBackClick={() => history.goBack()} />
                  </Col>
          }} />
            <Route exact path="/genre/:name"   render={({ match, history }) =>
                {if (!user) return <Col>
                   <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                      </Col>
               if (movies.length === 0) return <div className="main-view" />;
                  return <Col md={8}>
                    <GenreView genre={movies.find(m => m.Genre.Name === match.params.name)} onBackClick={() => history.goBack()} />
                       </Col>
          }
          }/>
            <Route exact path="/director/:name" render={({ match, history }) => {
               if (!user) return
                <Col>
                 <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                </Col>
                    if (movies.length === 0) return <div className="main-view" />;
                return <Col md={8}>
                       <DirectorView directorData={movies.find(m => m.Director.Name === match.params.name)} onBackClick={() => history.goBack()} />
                    </Col>
                     }
                    }/>
                    
                 </Row>
           </Router>
           );
           }
           };

          export default MainView;
          