import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ProfileInfo = ({
  user,
  // onLoggedOut
}) => {
  const [updateProfile, setUpdateProfile] = useState(false);
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Birthday, setBirthday] = useState("");

  const handleUpdateProfile = () => {
    setUpdateProfile(true);
  };

  const handleCancelUpdateProfile = () => {
    setUpdateProfile(false);
  };

  const handleSaveUpdateProfile = (e) => {
    e.preventDefault();
    const username = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    console.log("handleUpdateProfile()");

    axios({
      method: "put",
      url: `https://myflix01025.herokuapp.com/users/${username}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        Username,
        Password,
        Email,
        Birthday,
      },
    })
      .then((response) => {
        const data = response.data;
        console.log(data);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.open("/", "_self");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(user);
  return (
    <>
      {user && (
        <Form
          className="ProfileInfo"
          onSubmit={(e) => handleSaveUpdateProfile(e)}
        >
          <h1 className="my-5">My Profile</h1>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Username
            </Form.Label>
            <Col sm="10">
              {updateProfile ? (
                <Form.Control
                  type="text"
                  defaultValue={user}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              ) : (
                <Form.Control plaintext readOnly defaultValue={user.Username} />
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              {updateProfile ? (
                <Form.Control
                  type="email"
                  defaultValue={user}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              ) : (
                <Form.Control
                  type="email"
                  plaintext
                  readOnly
                  defaultValue={user.Email}
                />
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              {updateProfile && (
                <Form.Control
                  type="password"
                  defaultValue=""
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              )}
              {!updateProfile && (
                <Form.Control
                  type="password"
                  plaintext
                  readOnly
                  defaultValue="password"
                />
              )}
            </Col>
          </Form.Group>

          {updateProfile && (
            <div>
              <Button type="submit">Save Update</Button>{" "}
              <Button
                variant="outline-primary"
                onClick={handleCancelUpdateProfile}
              >
                Cancel
              </Button>
            </div>
          )}

          {!updateProfile && (
            <div>
              <Button onClick={handleUpdateProfile}>Update My Profile</Button>{" "}
              <Link to={`/users/${user}`}>
                <Button variant="outline-primary">Back</Button>
              </Link>
            </div>
          )}
        </Form>
      )}
    </>
  );
};

export default ProfileInfo;
