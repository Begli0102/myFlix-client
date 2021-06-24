import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {  FormControl } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';

import './registration-view.scss';

export function RegistrationView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ birthday, setBirthday ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password,confirmPassword,email,birthday);
  axios.post('https://myflix01025.herokuapp.com/users', {
    Username: username,
    Password: password,
    Email: email,
    Birthday: birthday
  })
  .then(response => {
     const data = response.data;
    console.log(data);
    window.open('/', '_self'); // the second argument '_self' is necessary so that the page will open in the current tab
  })
  .catch(e => {
    console.log('error registering the user')
  });
  };
  
  
  return (

    <Container className="login-view">
        <Row >
            <Form className="form" noValidate >
                <Form.Group  controlId="registerUsername">
                  <h1 className='h1' style={{ textAlign: "center" , color: "darkgray"}}>Registration</h1>
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

          <Form.Group controlId="registerConfirmPassword">
          <Form.Label className='label'>
          Confirm Password:
          </Form.Label>
          <Form.Control 
              required
              type="password" 
              placeholder="Confirm password" 
              value={confirmPassword} 
              name="up2"
              onChange={e => setConfirmPassword(e.target.value)}
              // isValid = {confirmPassword === password}
              />
            <Form.Control.Feedback type="valid">
              Welldone!
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Your password does not match!
            </Form.Control.Feedback>
          </Form.Group>
    
    
          <Form.Group controlId="registerEmail">
          <Form.Label className='label'>Email:</Form.Label>
          <Form.Control
              required type="email"
              placeholder="example@gmail.com"
              pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
              value={email}
              onChange={e => setEmail(e.target.value)} />
          <Form.Control.Feedback type="invalid" className="error form-info">
              Please enter a valid email.
          </Form.Control.Feedback>
          </Form.Group>
        
          <Form.Group controlId="registerBirthday">
            <Form.Label className='label'>
                Birthday:
            </Form.Label>
            <Form.Control 
            required
            type="date" 
            // min="1900-01-01" 
            // max={new Date().toISOString().split('T')[0]}
            placeholder="DD/MM/YYYY" 
            value={birthday} 
            onChange={e => setBirthday(e.target.value)} />
            <Form.Control.Feedback type="valid">
              Welldone!
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              This field is mandatory too!
            </Form.Control.Feedback>
          </Form.Group>
         
          <Button variant="secondary" size="md " block  onClick={handleSubmit}>Submit</Button> 
            </Form>
        </Row>
    
    </Container>
    
      );
}

 RegistrationView.PropTypes = {
     onRegistration: PropTypes.shape({
      username: PropTypes.string.isRequired,
       password: PropTypes.string.isRequired,
       confirmPassword: PropTypes.string.isRequired,
       email: PropTypes.string.isRequired,
       birthday: PropTypes.string.isRequired,
     }),
     onRegistration: PropTypes.func.isRequired,
  };
 