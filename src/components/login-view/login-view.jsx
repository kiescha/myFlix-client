import React, { useState } from "react";
import { Container, Form, Button, Card, Stack } from "react-bootstrap";
import "./login-view.scss";

export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    props.onLoggedIn(username);
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
                <Form.Group controlid="formUsername">
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your Username"
                  />
                </Form.Group>
                <Form.Group controlid="formPassword">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="text"
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
