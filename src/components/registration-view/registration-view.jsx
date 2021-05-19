import React, { useState } from 'react';
import propTypes from 'prop-Types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';

import './registration-view.scss';

export function RegistrationView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ birthday, setBirthday ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password,email,birthday);
    
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
    <Form className='form'>     
      <Form.Group controlId='registerUsername'>
        <Form.Label className='label'>Username:</Form.Label>
        <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)}
         autoComplete="username" placeholder="Username"
         required
        />
        </Form.Group>
        <Form.Group controlId='registerPassword'>
       <Form.Label className='label'> Password:</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password}
         onChange={e => setPassword(e.target.value)} 
         minLength={6}
         autoComplete="false"
         required
         />
        </Form.Group>
        <Form.Group controlId='registerEmail'>
        <Form.Label className='label'>Email:</Form.Label>
        <Form.Control type="email"  placeholder="example@gmail.com" value={email} 
        onChange={e => setEmail(e.target.value)}
        autoComplete="email"
        required
        />
        </Form.Group>
        <Form.Group controlId='registerBirthday'>
        <Form.Label className='label'>Birthday:</Form.Label>
        <Form.Control type="birthday" value={birthday} 
        onChange={e => setBirthday(e.target.value)}
        autoComplete="birthday"
        placeholder="DD.MM.YEAR"
        />
        </Form.Group>
       
        <Button variant="secondary"   onClick={handleSubmit}>Register</Button> 
        
    </Form>
  );
}

RegistrationView.PropTypes = {
    // onRegistration: PropTypes.shape({
    //   username: PropTypes.string.isRequired,
    //   password: PropTypes.string.isRequired,
    //   email: PropTypes.string.isRequired,
    //   birthday: PropTypes.string.isRequired,
    // }),
    // onRegistration: PropTypes.func.isRequired,
  };
 