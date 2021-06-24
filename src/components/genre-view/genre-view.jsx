import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';


import './genre-view.scss';



import { Link } from 'react-router-dom';

export function GenreView(props) {
  
    const { genre } = props;
   
    return (<Modal.Dialog className='dialog'>
      
        <Modal.Body>
        <Card.Text className="text-muted">Description</Card.Text>
          <p>{genre.Genre.Name}</p>
          <p>{ genre.Genre.Description }</p>
        </Modal.Body>
      
        <Modal.Footer>
        
           
    <Link to={'/'}>
             <Button variant="primary" size="" block>Back</Button>
            </Link>
        </Modal.Footer>
      </Modal.Dialog>
 
    );
}

GenreView.propTypes = {
    genreData: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Description: PropTypes.string.isRequired
        })
}; 