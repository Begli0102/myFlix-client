import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { BrowserRouter as Router, Route,Redirect, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


import {  FormControl } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import InputGroup from 'react-bootstrap/InputGroup';



import './login-view.scss';



export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');


  

  

  const handleSubmit = (e) => {
    e.preventDefault();
    let setisValid = formValidation();
    if (setisValid) {
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
      console.log('No such user');
      alert("Please enter a valid username or password");
    });
  };
}
  
const formValidation = () => {
  let usernameError = {};
  let passwordError = {};
  let isValid = true;
  if (username.trim().length < 6) {
    usernameError.usernameShort = "Username must be at least 6 characters";
    isValid = false;
  }
  if (password.trim().length < 6) {
    passwordError.passwordMissing = "Password must be at least 6 characters";
    isValid = false;
  }
  setUsernameError(usernameError);
  setPasswordError(passwordError);
  return isValid;
};



  return (

<Row className="login-form justify-content-md-center">
      <Col md={4}>
        <Form className="login-view">
          <h1 className="text-primary">Welcome to MyFlix!</h1>
          <Form.Group controlId="formUsername">
            <Form.Label >Username:</Form.Label>
            <Form.Control type="text" placeholder='Enter Username' onChange={e => setUsername(e.target.value)} />
            {Object.keys(usernameError).map((key) => {
              return (
                <div key={key} style={{ color: "red" }}>
                  {usernameError[key]}
                </div>
              );
            })}
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label >Password:</Form.Label>
            <Form.Control type="password" placeholder='Enter Password' onChange={e => setPassword(e.target.value)} />
            {Object.keys(passwordError).map((key) => {
              return (
                <div key={key} style={{ color: "red" }}>
                  {passwordError[key]}
                </div>
              );
            })}
          </Form.Group>
          <Button variant="primary" type="submit" block onClick={handleSubmit}>Submit</Button>
         <div className='account'> 
           <span>
            Don't have an account?
            </span>
          <Link to='/register'> Register</Link>
          </div>
        </Form >
      </Col >
    </Row >

//     <Container className="login-view">
//     <Row >
//       <Col md-8 col-md-6 col-12>
     
//         <Form className="form" noValidate >
//              <Form.Group  controlId="registerUsername">
//                <h1 className='h1' style={{ textAlign: "center" , color: "darkgray"}}></h1>
//                <Form.Label className='label'>
//                  Username:
//                </Form.Label>
//                <Form.Control  
//               required
//               type="text" 
//               maxLength={20}
//               minLength={5}
//               placeholder="Enter username" 
//               value={username} 
              
//               onChange={e => setUsername(e.target.value)} />
//             <Form.Control.Feedback type="valid">
//               Welldone!
//             </Form.Control.Feedback>
//             <Form.Control.Feedback type="invalid">
//               This field is mandatory!
//             </Form.Control.Feedback>
//           </Form.Group>

        
//        <Form.Group controlId="registerPassword">
//          <Form.Label className='label'>
//          Password:
//          </Form.Label>
//          <Form.Control 
//           required 
//           type="password" 
//           placeholder="Enter your Password" 
//           maxLength={12}
//           minLength={5}
//           value={password} 
//           name="up"
//           onChange={e => setPassword(e.target.value)} />
//        <Form.Control.Feedback type="valid">
//           Welldone!
//         </Form.Control.Feedback>
//         <Form.Control.Feedback type="invalid">
//           This field is mandatory!
//         </Form.Control.Feedback>
//       </Form.Group>
   

     
//       <Button variant="secondary" size="md " block type='submit'  onClick={handleSubmit}>Submit</Button>
//          </Form>
//          </Col>
//      </Row>
//      <Container className="mt-4">
//              <Row className="d-flex align-items-center justify-content-center">
//                <span>Don't have an account?</span>
//                <Link to={`/register`}>
//                  <Button variant="link" className="sign-up-link btn-lg" type="submit">Sign up</Button>
//                </Link>

//             </Row>
//            </Container>
//  </Container>

  );
}

LoginView.propTypes = {
  onLoggedIn: PropTypes.func
}; 