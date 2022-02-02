import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    props.onLoggedIn(username);
  };
  return (
    <Card border="primary" style={{ width: "25rem" }} className="text-center">
      <Card.Header>Log in</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlid="formUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlid="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
