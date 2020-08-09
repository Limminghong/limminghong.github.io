import React, { Component } from "react";
import { Grid } from "react-mdl";

import LandingPage from "./landingpage";
import AboutMe from "./aboutme";
import Projects from "./projects";

class Main extends Component {
  render() {
    return (
      <div className="main-body">
        <Grid>
          <LandingPage />
          <AboutMe />
          <Projects />
        </Grid>
      </div>
    );
  }
}

export default Main;
