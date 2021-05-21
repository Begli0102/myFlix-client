import React from 'react';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';

import { MovieCard } from '../movie-card/movie-card';
import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input';

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

function MovieList(props) {
  const { movies, visibilityFilter } = props;
  let filteredMovies = movies;

  if (visibilityFilter !== '') {
    filteredMovies = movies.filter(m =>m.Title.includes(visibilityFilter));
  }

  if (!movies) return <div className="main-view"/>;

  return <>
    <Col md={12} style={{ margin: '1em' }}>
      <VisibilityFilterInput visibilityFilter={visibilityFilter} />
    </Col>
    {filteredMovies.map(m => (
      <Col md={4} key={m._id}>
        <MovieCard movieData={m} />
      </Col>
    ))}
  </>;

}

export default connect(mapStateToProps)(MovieList);