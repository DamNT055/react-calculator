import React from "react";
import Button from "./Button";
import PropType from "prop-types";

import "./ButtonPanel.css";

export default class ButtonPanel extends React.Component {
  handleClick = (buttonName) => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return (
      <div className="component-button-panel">
        <div>
          <Button name="AC"></Button>
          <Button name="+/-"></Button>
          <Button name="%"></Button>
          <Button name="+"></Button>
        </div>
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  clickHandler: PropType.func,
};
