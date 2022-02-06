import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className="root-container">
        <div className="name-clock-container">
          <div className="name">
            <h1>I'm Luca Ammann</h1>
          </div>
          <div className="clock">
            <h2>{this.state.date.toLocaleTimeString()}</h2>
          </div>
        </div>
        <Social />
      </div>
    );
  }
}

function Social() {
  return (
    <div className="social-container">
      <a href="https://github.com/luca-ammann">
        <img src="/assets/github-logo.svg" alt="github-logo" />
      </a>
      <a href="https://www.instagram.com/_lucammann">
        <img src="/assets/instagram-logo.svg" alt="instagram-logo" />
      </a>
      <a href="https://ch.linkedin.com/in/luca-ammann">
        <img src="/assets/linkedin-logo.svg" alt="linkedin-logo" />
      </a>
      <a href="mailto:ammann.luca1@outlook.com?subject=Request from lucammann.dev">
        <img src="/assets/email-logo.svg" alt="email-logo" />
      </a>
    </div>
  );
}

// ========================================

ReactDOM.render(<Root />, document.getElementById("root"));
