import React, { Component } from "react";

class Email extends Component {
  render() {
    return (
      <div>
        <p>{this.props.email}</p>
      </div>
    );
  }
}

export default Email;
