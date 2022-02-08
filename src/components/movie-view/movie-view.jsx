import React from "react";
import "./movie-view.scss";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

export class MovieView extends React.Component {
  render() {
    const { movie, onBackClick } = this.props;
    return (
      <Container align="center">
        <Row>
          <Col>
            <Card
              border="dark"
              id="movie-card"
              className="text-center"
              style={{ width: "30rem" }}
            >
              <Card.Img
                id="movie-picture"
                border="primary"
                variant="top"
                src={movie.ImagePath}
              />
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Description}</Card.Text>
                <Card.Text>Genre: {movie.Genre.Name}</Card.Text>
                <Card.Text>Director: {movie.Director.Name}</Card.Text>
              </Card.Body>
              <Button
                onClick={() => {
                  onBackClick(null);
                }}
              >
                Back
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
