import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%" }} id="landingpage">
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="assets/images/avatar.png"
              alt="avatar"
              className="avatar-img"
            />
          </Cell>
          <div className="banner-text">
            <h1>Hey, I am Ming Hong!</h1>
            <hr />
            <h4>Computer Engineering Student</h4>
            <h4>National University of Singapore</h4>
            <Button
              href="Ming_Hong_LIM_CV.pdf"
              variant="outline-primary"
              download
            >
              Download my CV here!
            </Button>
            <p>
              <i className="fa fa-map-marker" aria-hidden="true" />
              Singapore
            </p>
          </div>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
