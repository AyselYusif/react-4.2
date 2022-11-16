import React, { Component } from "react";

class Name extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <p>{this.props.surname}</p>
      </div>
    );
  }
}

export default Name;
