import React, { Component } from "react";
import { Button } from "antd";

class SpeechRecognitionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSppech = e => {
    const SpeechRecognition =
      window.speechRecognition || window.webkitSpeechRecognition;
    console.log(new SpeechRecognition());
    const recognition = new SpeechRecognition();
    recognition.onstart = () => {
      console.log("started");
    };
    recognition.result = e => {
      console.log("e at the end", e);
    };
    document.querySelector(".btn").addEventListener("click", () => {
      recognition.start();
    });
  };
  render() {
    return (
      <div>
        <Button className="btn" onChange={this.handleSppech}>Voice Button</Button>
      </div>
    );
  }
}

export default SpeechRecognitionComponent;
