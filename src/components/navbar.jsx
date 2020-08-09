import React, { Component } from "react";
import { Link } from "react-scroll";
import { Navbar } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <Navbar fixed="top" bg="dark" variant="dark">
          <Navbar.Brand>
            <button className="nav-brand">
              <Link
                activeClass="active"
                to="landingpage"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                Ming Hong
              </Link>
            </button>
          </Navbar.Brand>
          <button className="nav-links">
            <Link
              activeClass="active"
              to="aboutme"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              About Me
            </Link>
          </button>
          <button className="nav-links">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              Projects
            </Link>
          </button>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
