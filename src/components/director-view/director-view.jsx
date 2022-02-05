import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./director-view.scss";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Media from "react-bootstrap/Media";
import { MovieCard } from "../movie-card/movie-card";

export function DirectorView(props) {
  const { directorData } = props;

  return (
    <Media className="d-flex flex-column  align-items-center ml-xs-5 mt-5">
      <Media.Body>
        <div className=" align-items-center ">
          <h1 className="display-4">{directorData.Director.Name}</h1>
        </div>
        <div className="align-items-center">
          <h4 className="text-muted mt-4 mr-2">Bio of a Director: </h4>
          <p>{directorData.Director.Bio}</p>
        </div>
        <div className="align-items-center mb-4">
          <p>
            {"Born in: "}{" "}
            {new Date(directorData.Director.Birth).toLocaleDateString()}
          </p>
          <p>
            {"Died in: "}
            {directorData.Director.Death
              ? new Date(directorData.Director.Death).toLocaleDateString()
              : "-"}
          </p>
        </div>
      </Media.Body>
      <Link to="/">
        <button className="button-director" variant="secondary" size="lg">
          Back
        </button>
      </Link>
    </Media>
  );
}

DirectorView.propTypes = {
  // directorData: PropTypes.shape({
  //         Name: PropTypes.string.isRequired,
  //         Bio: PropTypes.string.isRequired,
  //         Birth: PropTypes.string.isRequired,
  //         Death: PropTypes.string
  //     })
};
