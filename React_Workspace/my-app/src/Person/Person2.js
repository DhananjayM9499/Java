import React, { Component } from "react";
import "./Person.css";
class Person2 extends Component {
  render() {
    return (
      <div className="item">
        <h2>{this.props.name}</h2>
        <p>Hobbies: {this.props.hobbies}</p>
      </div>
    );
  }
}
export default Person2;
