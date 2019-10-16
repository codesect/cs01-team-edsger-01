import React, { Component } from "react";

class Time extends Component {
  state = {
    currentTime: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  render() {
    return (
      <div
        style={{
          fontSize: "10vmin",
          fontWeight: 100,
          width: "100%",
          textAlign: "center",
          background: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <time style={{ margin: "1rem" }}>{this.state.currentTime}</time>
      </div>
    );
  }
}

export default Time;
