import ReactDOM from "react-dom";
import "./index.scss";

function Root() {
  return (
    <div className="root-container">
      <div className="ghost-container">
        <img className="ghost" src="/assets/ghost.svg"></img>
      </div>

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
    </div>
  );
}

// ========================================

ReactDOM.render(<Root />, document.getElementById("root"));
