import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

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
    <Card >
      
    <Form className='form'  >
    <p >
      {/* <Link to="/register">
      <Button  className="register" variant="secondary" type="button">Register</Button>
       </Link> */}
       </p>
      
      <Form.Group controlId="formUsername">
        <Form.Label className='label'>Username:</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={username} 
        onChange={e => setUsername(e.target.value)} 
        autoComplete="username" placeholder="Username" required
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label className='label'>Password:</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password}  
        onChange={e => setPassword(e.target.value)}
        minLength={6} autoComplete="false" required
        />
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" className='label'/>
  </Form.Group>
      <Button variant="secondary" size="md " block type='submit' 
      onClick={handleSubmit}>Submit</Button>
      
    </Form>
    </Card>
  );
}

LoginView.propTypes = {
  onLoggedIn: PropTypes.func
}; 