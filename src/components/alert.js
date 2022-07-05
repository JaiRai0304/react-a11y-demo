import React, { Component } from "react";

class Alert extends Component {
  componentDidMount() {
    this.alertText.focus();
  }

  render() {
    return (
      <span
        className="alertText"
        id="alertMe"
        tabIndex="-1"
        role="alert"
        ref={span => {
          this.alertText = span;
        }}
      >
        THANK YOU, INFORMATION HAS BEEN RECEIVED!
      </span>
    );
  }
}
export default Alert;
