import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

import './genre-view.scss';


import { MovieCard } from '../movie-card/movie-card';

import { Link } from 'react-router-dom';

export function GenreView(props) {
    const { genre } = props;

    return (<Modal.Dialog>
        {/* <Modal.Header >
        
        </Modal.Header> */}
      
        <Modal.Body>
        <Card.Text className="text-muted">Description</Card.Text>
          <p>{genre.Genre.Name}</p>
          <p>{ genre.Genre.Description }</p>
        </Modal.Body>
      
        <Modal.Footer>
        
            <Button variant="secondary">Add to favourite</Button>
    <Button variant="primary">Delete from favourite</Button>
    <Link to={"/"}>
             <Button variant="primary" size="md" block>Back</Button>
            </Link>
        </Modal.Footer>
      </Modal.Dialog>
 
        // <Card className="genre-view-card">
        //     <Card.Body>
        //     <Row className="genre-view justify-content-md-center">
        //     <Card.Text className="text-muted">Description</Card.Text>
        //     <Col className='genre-body'>
        //         <Card.Title>{genre.Genre.Name}</Card.Title>
        //         <Card.Text>{ genre.Genre.Description }</Card.Text>
        //         </Col>
        //         <Col>
        //         <Link to={"/"}>
        //             <Button variant="primary" size="lg" block>Back</Button>
        //         </Link>
        //         </Col>
        //         </Row>
        //     </Card.Body>
        // </Card>
    );
}

GenreView.propTypes = {
    genreData: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Description: PropTypes.string.isRequired
        })
}; 