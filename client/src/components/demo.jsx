import React, { Component } from "react";

class Demo extends Component {
  handleOpen = () => {
    var elem = document.documentElement;
    console.log("elem", elem);
    elem.requestFullscreen();
  };
  handleClose = () => {
    document.exitFullscreen()
};
  render() {
    return (
      <div>
        <button onClick={this.handleOpen}>open full screen</button>
        <button onClick={this.handleClose}>close full screen</button>
      </div>
    );
  }
}

export default Demo;
