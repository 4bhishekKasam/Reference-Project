import React, { Component } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import "./App.css";
import { apiFunc } from "./api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: "" };
    this.submitClick = this.submitClick.bind(this);
  }

  submitClick(e) {
    console.log("clicked....");
    apiFunc().then(data => {
      this.setState({ movies: data[0] }, () => console.log(this.state.movies));
    });
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h2>Movies</h2>
          <Button buttonClick={this.submitClick} />
          <Card movies={this.state.movies} />
        </div>
      </div>
    );
  }
}

export default App;
