import React, { Component } from "react";

class PersonalInfo extends Component {
  render() {
    return (
      <div>
        <p>{this.props.info}</p>
      </div>
    );
  }
}
export default PersonalInfo;
