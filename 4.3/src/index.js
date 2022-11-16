import React, { Component } from "react";
import ReactDOM from "react-dom";
import Profile from "./Profile";
import "./style.css";
class App extends Component {
  render() {
    return <Profile />;
  }
}

const rootElement = document.querySelector("#root");
ReactDOM.render(<App />, rootElement);
