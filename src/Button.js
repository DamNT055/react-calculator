import React from "react";
import PropTypes from "prop-types";

import "./Button.css";

export default class Button extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };
  render() {
    const className = [
      "component-button",
      this.props.orange ? "orange" : "",
      this.props.wide ? "wide" : "",
    ];

    return (
      <div className={className.join(" ").trim()}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}

Button.propTypes = {
  clickHandler: PropTypes.func,
  name: PropTypes.string,
  orange: PropTypes.bool,
  wide: PropTypes.bool,
};
