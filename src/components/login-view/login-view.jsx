import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Card, Stack } from "react-bootstrap";
import "./login-view.scss";

export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://manoflixdb.herokuapp.com/login", {
        Username: username,
        Password: password,
      })
      .then((response) => {
        const data = response.data;
        props.onLoggedIn(data);
      })
      .catch((e) => {
        console.log("No user found");
      });
  };
  return (
    <>
      <div id="welcome-msg">
        <h1>Welcome to myFlix!</h1>
        <p>Please log in to continue.</p>
      </div>
      <Container align="center">
        <Card
          border="primary"
          style={{ width: "25rem" }}
          className="text-center"
          bg="primary"
        >
          <Card.Header as="h5">Log in</Card.Header>
          <Card.Body>
            <Form>
              <Stack gap={3}>
                <Form.Group controlId="formUsername">
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your Username"
                  />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit}>
                  Log in
                </Button>
                <Button>Register</Button>
              </Stack>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
