import React from 'react';
import axios from 'axios';

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


     if (movies.length === 0) return <div className = "main-view">The list is empty!</div>;
     return (
         <div className="main-view">
           {selectedMovie
             ? <MovieView movieData = {selectedMovie} onBackClick = {(newSelectMovie) => {this.setSelectedMovie(newSelectMovie);}}/>
             : movies.map(movie => (
<MovieCard key={movie._id} movieData={movie} onMovieClick = {(movie) => {this.setSelectedMovie(movie)}} />
             ))
           }
         </div>
  );
}
componentDidMount() {
  // code executed right after the component is added to the DOM
}
}
export default MainView;
