import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export function RegistrationView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ birthday, setBirthday ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password,email,birthday);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
     props.onRegistration(username);
  };

  return (
    <Form>
<<<<<<< HEAD
      <Form.Group controlId='registerUsername'>
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </Form.Group>
        <Form.Group controlId='registerPassword'>
       <Form.Label> Password:</Form.Label>
        <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group controlId='registerEmail'>
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group controlId='registerBirthday'>
        <Form.Label>Birthday:</Form.Label>
        <Form.Control type="birthday" value={birthday} onChange={e => setBirthday(e.target.value)} />
        </Form.Group>
        <Button variant="outline-secondary" onClick={handleSubmit}>Submit</Button>
=======
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <label>
        Username:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        Username:
        <input type="birthday" value={birthday} onChange={e => setBirthday(e.target.value)} />
      </label>
      <button type="submit" onClick={handleSubmit}>Submit</button>
>>>>>>> myFlix-client-branch
    </Form>
  );
}

RegistrationView.PropTypes = {
  onRegistration: PropTypes.func
}; 