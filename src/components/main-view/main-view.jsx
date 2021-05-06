import React from 'react';
import axios from 'axios';

<<<<<<< Updated upstream
=======
import './main-view.scss';

import  {LoginView} from '../login-view/login-view';
import  {RegistrationView} from '../registration-view/registration-view';
>>>>>>> Stashed changes
import  {MovieCard}  from '../movie-card/movie-card';
import  {MovieView} from '../movie-view/movie-view';

export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      movies:[],
      selectedMovie: null
    };
  }

  keypressCallback(event) {
    console.log(event.key);
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



  setSelectedMovie(newSelectedMovie) {
   this.setState({
     selectedMovie: newSelectedMovie
   });
 }

 render() {
     const {movies, selectedMovie} = this.state;


     if (movies.length === 0) return <div className = "main-view"></div>;
     return (
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
}

}
export default MainView;
