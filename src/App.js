import "./App.css";
import React from "react";
import axios from "axios";
import Nav from "./components/Nav";
import MovieList from "./components/MovieList";
import { Routes, Route } from "react-router-dom";
import ShowDetail from "./components/ShowDetail";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    axios.get("https://ghibliapi.herokuapp.com/films/").then((result) => {
      this.setState({ movies: result.data });
    });
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Routes>
          <Route
            path=""
            element={<MovieList moviesData={this.state.movies} />}
          />
          <Route
            path="/:id"
            element={<ShowDetail moviesData={this.state.movies} />}
          />
        </Routes>
      </div>
    );
  }
}

export default App;
