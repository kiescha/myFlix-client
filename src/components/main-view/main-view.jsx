import React from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import "./main-view.scss";

import { LoginView } from "../login-view/login-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null,
    };
  }
  
  getMovies(token){
    axios.get("https://manoflixdb.herokuapp.com/movies", {
      headers: {Authorization: `Bearer${token}`}
    })
    .then(response => {
      this.setState({
        movies:response.data
      });
    })
    .catch(function(error){
      console.log(error);
    });
  }

  componentDidMount() {
    axios
      .get("https://manoflixdb.herokuapp.com/movies")
      .then((response) => {
        this.setState({
          movies: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setSelectedMovie(movie) {
    this.setState({
      selectedMovie: movie,
    });
  }

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.userName
    });
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.userName);
    this.getMovies(authData);
  }

  render() {
    const { movies, selectedMovie, user } = this.state;

    if (!user)
      return <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />;

    if (movies.length === 0) return <div className="main-view" />;

    return (
      <>
        <div id="welcome-msg">
          <h1>Today's Top 10 Movies</h1>
        </div>

        <Row className="justify-content-md-center">
          {selectedMovie ? (
            <Col>
              <MovieView
                movie={selectedMovie}
                onBackClick={(newSelectedMovie) => {
                  this.setSelectedMovie(newSelectedMovie);
                }}
              />
            </Col>
          ) : (
            movies.map((movie) => (
              <Col className="p-3">
                <MovieCard
                  key={movie._id}
                  movie={movie}
                  onMovieClick={(movie) => {
                    this.setSelectedMovie(movie);
                  }}
                />
              </Col>
            ))
          )}
        </Row>
      </>
    );
  }
}
