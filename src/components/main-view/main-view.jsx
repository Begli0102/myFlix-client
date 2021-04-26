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
          ImagePath: "https://www.imdb.com/title/tt0068646/mediaviewer/rm746868224/"},

        { _id: 2, Title: "Jurassic Park",
         Description: "Update  It is an American science fiction media franchise centered on a disastrous attempt to create a theme park of cloned dinosaurs.",
         ImagePath: "https://www.imdb.com/title/tt0107290/mediaviewer/rm3913805824/"},

        { _id: 3, Title: "Close Encounters of the Third Kind",
         Description:"It tells the story of Roy Neary, an everyday blue-collar worker in Indiana, whose life changes after an encounter with an unidentified flying object.",
         ImagePath:  "https://www.imdb.com/title/tt0075860/mediaviewer/rm2586827008/"}  
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
