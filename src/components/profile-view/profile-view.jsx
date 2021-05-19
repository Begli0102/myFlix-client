import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './profile-view.scss';

export function ProfileView(props) {
  const { user} = props,
        [ username, setUsername ] = useState(''),
        [ password, setPassword ] = useState(''),
        [ email, setEmail ] = useState(''),
        [ birthday, setBirthday ] = useState('')
        

    //updating username info

    const handleUpdate = (e) => {
        e.preventDefault();
    

        axios.put('https://myflix01025.herokuapp.com/users', {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
          })
          .then(response => {
             const data = response.data;
            console.log(data);
            window.open('/', '_self'); 
          })
          .catch(e => {
            console.log('error updating the user')
          });
          };


         // Allowing the user to deregister

         const handleDelete = () => {
          axios
              .delete(`https://myflix01025.herokuapp.com/users/${user.username}`, {
                  headers: {Authorization: `Bearer ${ localStorage.getItem('token') }`}
              })
              .then(response => {
                  localStorage.removeItem('token');
                  localStorage.removeItem('user');
                  window.open('/', '_self');
              })
              .catch(error => console.error(error));
      }
  

          //Allow a user to remove a movie from their list of favorites
            const handleUnfav = (movie) => {
        const token = localStorage.getItem('token');

        axios.delete(`https://myflix01025.herokuapp.com/users/${user.username}/${movieId}`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(response => {
                document.location.reload(true);
            })
            .catch(error => console.error(error));
    }
console.log(user);
    return(
      <Card className="profile-view-card">
            <Row>
                <Form as={Col} xs={8}>
                    <Form.Group controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text" placeholder="Username" autoComplete="username"
                            defaultValue={ `${ user.username }` }
                            onChange={ e => setUsername(e.target.value) }
                            
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="example@gmail.com" autoComplete="email"
                            defaultValue={ `${ user.Email }` }
                            onChange={ e => setEmail(e.target.value) }
                        />
                    </Form.Group>

                    <Form.Group controlId="formBirthday">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date"
                            autoComplete="birthday"
                            defaultValue={ `${ user.Birth }` }
                            onChange={ e => setBirthday(e.target.value) }
                        />
                    </Form.Group>

                    <h2>Password</h2>
                    <Form.Group controlId="formCurrentPassword" as={Col} xs={6} className="pl-0 pr-1">
                        <Form.Label>Current Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Current Password"
                            autoComplete="current password"
                            defaultValue={''}
                            //onChange={ e => setPassword(e.target.value) }
                        />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formNewPassword">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="New Password"
                                autoComplete="new password"
                                defaultValue={''}
                                onChange={ e => setPassword(e.target.value) }
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="New Password"
                                autoComplete="new password"
                                defaultValue={''}
                                onChange={ e => setPassword(e.target.value) }
                            />
                        </Form.Group>
                    </Form.Row>

                    <Button className="ms-auto" variant="primary" type="submit" onClick={ handleUpdate}>Update</Button>
                </Form>

                {/* <Card as={Col} xs={4} className="favs-card">
                    <Card.Body>
                        <Card.Title>Favs</Card.Title>
                        <hr />
                        { userFavs.map(movie => (
                            <Row key={ movie._id }>
                                <Col xs={10}>
                                    <Card.Text>{ movieData.Title }</Card.Text>
                                    <Card.Text className="text-truncate">{ movieData.Description }</Card.Text>
                                </Col>
                                <Button variant="link" as={Col} xs={2} onClick={ () => handleUnfav(movie._id) }>
                                    X
                                </Button>
                                <hr />
                            </Row>
                        ))}
                    </Card.Body>
                </Card> */}

                <Row className="w-100 justify-content-end">
                    <Button variant="link" onClick={ handleDelete }>Delete my account</Button>
                </Row>
            </Row>
        </Card>
    );
    }

ProfileView.propTypes = {
  
}; 