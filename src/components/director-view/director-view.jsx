import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './director-view.scss';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

import { MovieCard } from '../movie-card/movie-card';

export function DirectorView(props) {
  const { directorData } = props;

  return (
    <Modal.Dialog className='director'>
  <Modal.Header>
    <Modal.Title className='title'>{ directorData.Director.Name }</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <Card.Text className="text-muted">Bio of a Director:</Card.Text>
    <p>{directorData.Director.Bio }</p>
    <p>{'Born in: '} { new Date(directorData.Director.Birth).toLocaleDateString() }</p>
    <p>{'Died in: '}{(directorData.Director.Death) ? new Date(directorData.Director.Death).toLocaleDateString() : '-' }</p>
  </Modal.Body>

  <Modal.Footer>
  
  <Link to={'/'}>
    <Button variant="primary" size="lg" block>Back</Button></Link>
  </Modal.Footer>
</Modal.Dialog>
    
  );
  }

  DirectorView.propTypes = {
    // directorData: PropTypes.shape({
    //         Name: PropTypes.string.isRequired,
    //         Bio: PropTypes.string.isRequired,
    //         Birth: PropTypes.string.isRequired,
    //         Death: PropTypes.string
    //     })
      }