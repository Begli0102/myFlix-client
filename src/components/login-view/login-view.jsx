import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import {  FormControl } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';


import './login-view.scss';

export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Send a request to the server for authentication */
    axios.post('https://myflix01025.herokuapp.com/login', {
      Username: username,
      Password: password
    })
    .then(response => {
      const data = response.data;
      props.onLoggedIn(data);
    })
    .catch(e => {
      console.log('no such user')
    });
  };
  
  

  return (
    <Container className="login-view">
    <Row >
        <Form className="form" noValidate >
            <Form.Group  controlId="registerUsername">
              <h1 className='h1' style={{ textAlign: "center" , color: "darkgray"}}></h1>
              <Form.Label className='label'>
                Username:
              </Form.Label>
              <Form.Control  
              required
              type="text" 
              maxLength={20}
              minLength={5}
              placeholder="Enter username" 
              value={username} 
              
              onChange={e => setUsername(e.target.value)} />
            <Form.Control.Feedback type="valid">
              Welldone!
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              This field is mandatory!
            </Form.Control.Feedback>
          </Form.Group>

          {/* <InputGroup hasValidation> */}
      <Form.Group controlId="registerPassword">
        <Form.Label className='label'>
        Password:
        </Form.Label>
        <Form.Control 
          required 
          type="password" 
          placeholder="Enter your Password" 
          maxLength={12}
          minLength={5}
          value={password} 
          name="up"
          onChange={e => setPassword(e.target.value)} />
       <Form.Control.Feedback type="valid">
          Welldone!
        </Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          This field is mandatory!
        </Form.Control.Feedback>
      </Form.Group>
      {/* </InputGroup> */}

     
      <Button variant="secondary" size="md " block type='submit'  onClick={handleSubmit}>Submit</Button>
        </Form>
    </Row>

</Container>

  );
}

LoginView.propTypes = {
  onLoggedIn: PropTypes.func
}; 