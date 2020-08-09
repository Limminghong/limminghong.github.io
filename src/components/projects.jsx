import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import ProjectCards from "./project-cards";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 20,
    paddingBottom: 20,
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
            <Grid item xs={2}>
              <ProjectCards
                image="assets/images/insincere-banner.png"
                projectTitle="Quora Insincere Questions Classification"
                projectType="Machine Learning / Natural Language Processing"
                projectPeriod="Aug 2019 - Nov 2019"
                projectDescription="Making use of Bayesian, Regression and deep learning models (RNN, LSTM, GRU), our group aims to accurately differentiate insincere questions from sincere questions. Knowledge of NLP is applied as well, including rigorous preprocessing of data and making use of pre-trained embeddings."
                projectUrl="https://isteps.comp.nus.edu.sg/event/15th-steps/module/CS3244/project/4"
              />
            </Grid>
            <Grid item xs={2}>
              <ProjectCards
                image="assets/images/corppro-banner.png"
                projectTitle="CorpPro"
                projectType="Desktop Application"
                projectPeriod="Aug 2018 - Nov 2018"
                projectDescription="CorpPro is a Java desktop application that act as your one stop address book for all contacts management needs. It contains all the essential functionality to improve your productivity."
                projectUrl="https://github.com/CS2113-AY1819S1-W12-3/main"
              />
            </Grid>
            <Grid item xs={2}>
              <ProjectCards
                image="assets/images/studylah-banner.jpeg"
                projectTitle="StudyLah"
                projectType="Mobile Application"
                projectPeriod="May 2018 - Sep 2018"
                projectDescription="An interactive android application which serves as a vehicle to allow students to book, join, and gain from various study sessions occurring across the campus. Moreover, apart from being used as a platform to organise study sessions between various groups of students across NUS. It gives NUS students, especially undergraduates and freshmen, the ability to collaborate and consolidate their strengths and weaknesses within certain areas of their academic learning."
                projectUrl="https://github.com/Limminghong/StudyLah"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
