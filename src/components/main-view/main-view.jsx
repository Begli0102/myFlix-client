import React from 'react';
import  {MovieCard}  from '../movie-card/movie-card';
import  {MovieView} from '../movie-view/movie-view';

export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      movies:
        [
        { _id: 1, Title: 'The Godfather',
         Description:" The story, spanning from 1945 to 1955, chronicles the Corleone family under patriarch Vito Corleone (Brando), focusing on the transformation of his youngest son, Michael Corleone (Pacino), from reluctant family outsider to ruthless mafia boss.",
          ImagePath: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
          Director:"Francis Ford Coppola",
          Genre:"Crime"},

        { _id: 2, Title: "Jurassic Park",
         Description: "Update  It is an American science fiction media franchise centered on a disastrous attempt to create a theme park of cloned dinosaurs.",
         ImagePath: "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
         Director:"Steven Allan Spielberg",
         Genre:"Science fiction"},

        { _id: 3, Title: "Close Encounters of the Third Kind",
         Description:"It tells the story of Roy Neary, an everyday blue-collar worker in Indiana, whose life changes after an encounter with an unidentified flying object.",
         ImagePath:  "https://m.media-amazon.com/images/M/MV5BMjM1NjE5NjQxN15BMl5BanBnXkFtZTgwMjYzMzQxMDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
         Director:"Steven Allan Spielberg",
         Genre:"Science fiction"}
        ],
      selectedMovie: null
    };
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
}
export default MainView;
