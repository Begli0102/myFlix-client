import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {  FormControl } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

import './registration-view.scss';

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [usernameError, setUsernameError] = useState({});
  const [emailError, setEmailError] = useState({});
  const [passwordError, setPasswordError] = useState({});
  const [confirmPasswordError, setconfirmPasswordError] = useState({});
  const [birthdayError, setBirthdayError] = useState({});


  const handleSubmit = (e) => {
    e.preventDefault();
    let setisValid = formValidation();
    if (setisValid) {
      axios.post('https://myflix01025.herokuapp.com/users', {
        Username: username,
        Password: password,
        ConfirmPassword: confirmPassword,
        Email: email,
        Birthday: birthday
      })
        .then(response => {
          const data = response.data;
          console.log(data);
          window.open('/', '_self'); // the second argument '_self' is necessary so that the page will open in the current tab
          alert("You have sucessfully registered.");
        })
        .catch(error => {
          if (error.response && error.response.status === 400) {
            setUsernameError({ usernameDuplicated: 'Username already exists.' })
          } else {
            alert('The value you entered is not valid.')
          }
        });
       console.log(username, password, email, birthday);
      // props.onRegister(username);
    };
  }

  const formValidation = () => {
    const usernameError = {};
    const emailError = {};
    const passwordError = {};
    const confirmPasswordError = {};
    const birhdayError = {};
    let isValid = true;
    if (username.trim().length < 6) {
      usernameError.usernameShort = "Username must contain at least 6 letters";
      isValid = false;
    }
    else if (password.trim().length < 6) {
      passwordError.passwordMissing = "You must enter a password.(minimum 4 characters) ";
      isValid = false;
    }
    else if (password !== confirmPassword) {
      confirmPasswordError.passwordMismatch = "Your passwords do not match.";
      isValid = false;
    }
    else if (!email.includes(".") || !email.includes("@")) {
      emailError.emailNotEmail = "A valid email address is required.";
      isValid = false;
    }
    else if (birthday === '') {
      birhdayError.noBirthday = "Please enter a birthdate";
      isValid = false;
    }
    setUsernameError(usernameError);
    setEmailError(emailError);
    setPasswordError(passwordError);
    setconfirmPasswordError(confirmPasswordError);
    setBirthdayError(birhdayError);
    return isValid;
  };


  return (
    <Row className="login-form justify-content-md-center">
    <Col md={4}>
      <Form className="login-view">
        <h1 className="text-primary">Welcome to MyFlix!</h1>
        <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" value={username} placeholder='Enter Username' onChange={e => setUsername(e.target.value)} />
          {Object.keys(usernameError).map((key) => {
            return (
              <div key={key} style={{ color: "red" }}>
                {usernameError[key]}
              </div>
            );
          })}
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" value={password} placeholder='Enter Password' onChange={e => setPassword(e.target.value)} />
          {Object.keys(confirmPasswordError).map((key) => {
            return (
              <div key={key} style={{ color: "red" }}>
                {confirmPasswordError[key]}
              </div>
            );
          })}
        </Form.Group>

        <Form.Group controlId="confirmformPassword">
          <Form.Label>Confirm Password:</Form.Label>
          <Form.Control type="password" value={confirmPassword} placeholder='Enter Password' onChange={e => setConfirmPassword(e.target.value)} />
          {Object.keys(passwordError).map((key) => {
            return (
              <div key={key} style={{ color: "red" }}>
                {passwordError[key]}
              </div>
            );
          })}
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" value={email} placeholder='Enter your Email' onChange={e => setEmail(e.target.value)} />
          {Object.keys(emailError).map((key) => {
            return (
              <div key={key} style={{ color: "red" }}>
                {emailError[key]}
              </div>
            );
          })}
        </Form.Group>

        <Form.Group controlId="formBirthdate">
          <Form.Label>Birthdate:</Form.Label>
          <Form.Control type="date" placeholder='MM/DD/YYYY' onChange={e => setBirthday(e.target.value)} />
          {Object.keys(birthdayError).map((key) => {
            return (
              <div key={key} style={{ color: "red" }}>
                {birthdayError[key]}
              </div>
            );
          })}
        </Form.Group>
        
        <Button  variant="secondary" type='submit' onClick={handleSubmit} block>Submit</Button>
      </Form>
    </Col>
  </Row >

    
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
 