import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import ProjectCards from "./project-cards";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 20,
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <div className="projects-body" id="projects">
      <h1>Projects</h1>
      <hr />
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            <Grid item xs={3}>
              <ProjectCards
                image="assets/images/insincere-banner.png"
                title="Quora Insincere Questions Classification"
                projectTitle="Quora Insincere Questions Classification"
              />
            </Grid>
            <Grid item xs={3}>
              <ProjectCards
                image="assets/images/corppro-banner.png"
                title="CorpPro"
                projectTitle="CorpPro"
              />
            </Grid>
            <Grid item xs={3}>
              <ProjectCards
                image="assets/images/studylah-banner.jpeg"
                title="StudyLah"
                projectTitle="StudyLah"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
