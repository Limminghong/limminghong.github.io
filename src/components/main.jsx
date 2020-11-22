import React, { Component } from "react";
import { Grid } from "react-mdl";

import LandingPage from "./landingpage";
import AboutMe from "./aboutme";
import Experiences from "./experiences";
import Projects from "./projects";

class Main extends Component {
  render() {
    return (
      <div className="main-body">
        <Grid>
          <LandingPage />
          <AboutMe />
          <Experiences />
          <Projects />
        </Grid>
      </div>
    );
  }
}

export default Main;
