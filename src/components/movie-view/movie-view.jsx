import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Media from "react-bootstrap/Media";
import { Link } from "react-router-dom";

import "./movie-view.scss";

import { Card } from "react-bootstrap";

export class MovieView extends React.Component {
  componentDidMount() {
    document.addEventListener("keypress", (event) => {
      console.log(event.key);
    });
  }

  handleAdd() {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    axios
      .put(
        `https://myflix01025.herokuapp.com/users/${user}` +
          "/movies/" +
          this.props.movieData._id,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        console.log(response);
        alert(
          this.props.movieData.Title +
            " has been added to your favorites movie."
        );
      });
  }

  render() {
    const { movieData } = this.props;

    return (
      <div className="movie-view">
        <Media className="d-flex flex-column flex-md-row align-items-center ml-xs-5">
          <Media.Body>
            <span className="d-flex align-items-center">
              <img
                width={220}
                height={326}
                className="ml-4"
                src={movieData.ImagePath}
                alt="movie-poster placeholder"
              />
              <h1 className="display-4">{movieData.Title}</h1>
            </span>
            <span className="d-flex align-items-center">
              <h4 className="text-muted mt-4 mr-2">Genre: </h4>
              <Link to={`/genre/${movieData.Genre.Name}`}>
                <h4 className="genre-link link mt-4">{movieData.Genre.Name}</h4>
              </Link>
            </span>
            <span className="d-flex align-items-center mb-4">
              <h4 className="text-muted mr-2">Director: </h4>
              <Link to={`/director/${movieData.Director.Name}`}>
                <h4 className="director-link link">
                  {movieData.Director.Name}
                </h4>
              </Link>
            </span>
            <p className="text-justify">{movieData.Description}</p>
          </Media.Body>
        </Media>
        <Link to="/">
          <Button variant="secondary">Back</Button>
        </Link>
        <Button className="add-favorite-btn" onClick={(e) => this.handleAdd(e)}>
          <span className="d-flex align-items-center">Add to favorites</span>
        </Button>
      </div>
    );
  }
}
MovieView.propTypes = {
  movieData: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired,
      Death: PropTypes.string,
    }),
    ImagePath: PropTypes.string.isRequired,
    Featured: PropTypes.bool,
  }).isRequired,
};
