import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import "./App.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = (buttonName) => {
    this.setState();
  };

  render() {
    return (
      <div className="component-app">
        <Display></Display>
        <ButtonPanel></ButtonPanel>
      </div>
    );
  }
}
