import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="container">
        <br />
        <div className="row">
          <div className="col-md-2">Movie :</div>
          <div className="col-md-2">{movies.title}</div>
        </div>
        <div className="row">
          <div className="col-md-2">Released :</div>
          <div className="col-md-2">{movies.year}</div>
        </div>
        <div className="row">
          <div className="col-md-2">Synopsis :</div>
          <div className="col-md-3">{movies.synopsis}</div>
        </div>
      </div>
    );
  }
}
