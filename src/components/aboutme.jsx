import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    return (
      <div className="aboutme-text" id="aboutme">
        <h1>About Me</h1>
        <hr />
        <p>
          I am a final year student currently pursuing a Bachelor's degree in
          Computer Engineering in the National University of Singapore. Since
          young, I have been perpetually curious about the challenges different
          communities are facing around the world. With the rapid advancement in
          technology in recent times, there are many ways we can formulate
          solutions for these challenges. Therefore, it is my personal goal to
          be part of the digital revolution and explore ways in which technology
          can be used for the common good.
        </p>
        <p>Connect with me at:</p>
        <div className="social-links">
          {/* Linkedin */}
          <a
            href="https://www.linkedin.com/in/limminghong/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a
            href="https://github.com/Limminghong"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/limminghong/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/lim.m.hong.9"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-facebook" aria-hidden="true" />
          </a>

          {/* E-Mail */}
          <a
            href="mailto: minghonglim@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-envelope" aria-hidden="true" />
          </a>
        </div>
      </div>
    );
  }
}

export default AboutMe;
