import React from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import {Navbar,Nav,Form,FormControl} from "react-bootstrap";
import Container from 'react-bootstrap/Container'

import './main-view.scss';

import { setMovies } from '../../actions/actions';  //line 14-15  #0
 import MovieList from '../movie-list/movie-list';

import  {LoginView} from '../login-view/login-view';
import  {RegistrationView} from '../registration-view/registration-view';

import  {MovieCard}  from '../movie-card/movie-card';
import  {MovieView} from '../movie-view/movie-view';

import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';
import { ProfileView } from '../profile-view/profile-view';
import { VisibilityFiterInput } from '../visibility-filter-input/visibility-filter-input';

// #2
class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      // movies:[ ],              // #3 movies state removed from here
       selectedMovie: null,
      user:null
    };
  }

  //using axios method to fetch movies from heroku

  getMovies(token) {
    axios.get('https://myflix01025.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}`}
    })
    .then(response => {
      // #4
      this.props.setMovies(response.data);  //..... setMovies
      
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

}


render() {

  // #5 movies is extracted from this.props rather than from the this.state
  let { movies } = this.props;
  let { user } = this.state;
  
  
  return (  
    <Router>
    
    <Navbar sticky="top"  bg="light" expand="lg">
          <Navbar.Brand href="#home">MyFlix</Navbar.Brand>
          {!user ? 
          (
            <ul>
              <Link to={`/`}>
                <Button
                  variant="link"
                  className="navbar-link"
                >
                  Sign In
                  </Button>
              </Link>
              {/* <Link to={`/register`}>
                <Button
                  variant="link"
                  className="navbar-link"
                >
                  Register
                  </Button>
              </Link> */}
            </ul>
          ) : (
            <ul>
              <Link to={`/`}>
                <Button
                  variant="link"
                  className="navbar-link"
                >
                  Movies
                  </Button>
              </Link>
              <Link to={`/users/${user}`}>
                <Button
                  variant="link"
                  className="navbar-link"
                >
                  My Account
                  </Button>
              </Link>
              <Link to={`/register`}>
                <Button
                  variant="link"
                  className="navbar-link"
                  onClick={() => this.onLoggedOut()}
                >
                  Sign Out
                  </Button>
              </Link>
            </ul>
          )}
        </Navbar>
<Container>
       <Row className="main-view justify-content-md-center" >
       
          <Route exact path="/" render={() => {
            if (!user)
             return (
              <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
             </Col>
             )
              
      if (movies.length === 0) return <div className="main-view" />;
        // #6
        return <MovieList movies={movies}/>;
        }} />
        <Route path="/register" render={() => {
          
           if (user) return <Redirect to="/" />
           return <Col>
              <RegistrationView />
              </Col>
                 }} />
       
       <Route exact path="/users/:username" render={({ history }) => {
            if (!user) return <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} /></Col>
            return <Col md={8}>
              <ProfileView onLoggedIn={user => this.onLoggedIn(user)}
                movies={movies} user={user}
                onBackClick={() => history.goBack()} />

            </Col>
          }} />

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
                 </Container>
           </Router>
           );
           }
           };

           // #7
           let mapStateToProps = state => {return { movies: state.movies } }
           
          // #8
          export default connect(mapStateToProps, { setMovies } )(MainView);
          