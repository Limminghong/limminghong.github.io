import React, { Component } from "react";

class Contacts extends Component {
  render() {
    return (
      <div className="contact-grid" id="contact">
        <h2>Contact me</h2>
        <hr />
        <p>
          If you have any internship/job offers or would like to work/discuss a
          project you are working on with me, please feel free to contact me
          through one of these mediums:
        </p>
        <div className="contact-list">
          <div className="contact-content">
            <i className="fa fa-phone-square" aria-hidden="true" />
            (+65) 9232 8328
          </div>
          <div className="contact-content">
            <i className="fa fa-envelope" aria-hidden="true" />
            minghonglim@gmail.com
          </div>
          <div className="contact-content">
            <i className="fa fa-skype" aria-hidden="true" />
            minghonglim_1
          </div>
        </div>
        <p style={{ textDecoration: "underline", textAlign: "center" }}>
          Connect with me at:
        </p>
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
        </div>
      </div>
    );
  }
}

export default Contacts;
