import React from 'react';
import Col from 'react-bootstrap/Col';


export class MovieView extends React.Component {

  componentDidMount() {
    document.addEventListener('keypress', event => {
      console.log(event.key);
    });
  }

  render() {
    const { movieData,onBackClick } = this.props;

    return (
      <div className="movie-view">
        <div className="movie-poster">
          <img src={movieData.ImagePath} />
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movieData.Title}</span>
        </div>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movieData.Description}</span>
        </div>
        <div className="director">
          <span className="label">Director: </span>
          <span className="value">{movieData.Director}</span>
        </div>
        <div className="genre">
          <span className="label">Genre: </span>
          <span className="value">{movieData.Genre}</span>
        </div>
        <button variant="primary" size="md" onClick={() => {onBackClick(null);}}>Back</button>
       </div>
    );
  }
}
 