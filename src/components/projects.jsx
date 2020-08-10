import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

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
      <div className={classes.root}>
        <Grid container justify="center" alignItems="center" spacing={0}>
          <Grid item xs={12} md={3} align="center">
            <ProjectCards
              image="assets/images/insincere-banner.png"
              projectTitle="Quora Insincere Questions Classification"
              projectType="Machine Learning / Natural Language Processing"
              projectPeriod="Aug 2019 - Nov 2019"
              projectDescription="Making use of Bayesian, Regression and deep learning models (RNN, LSTM, GRU), our group aims to accurately differentiate insincere questions from sincere questions. Knowledge of NLP is applied as well, including rigorous preprocessing of data and making use of pre-trained embeddings."
              haveButton="true"
              projectUrl="https://isteps.comp.nus.edu.sg/event/15th-steps/module/CS3244/project/4"
            />
          </Grid>
          <Grid item xs={12} md={3} align="center">
            <ProjectCards
              image="assets/images/corppro-banner.png"
              projectTitle="CorpPro"
              projectType="Desktop Application"
              projectPeriod="Aug 2018 - Nov 2018"
              projectDescription="CorpPro is a Java desktop application that act as your one stop address book for all contacts management needs. It contains all the essential functionality to improve your productivity."
              haveButton="true"
              projectUrl="https://github.com/CS2113-AY1819S1-W12-3/main"
            />
          </Grid>
          <Grid item xs={12} md={3} align="center">
            <ProjectCards
              image="assets/images/studylah-banner.jpeg"
              projectTitle="StudyLah"
              projectType="Mobile Application"
              projectPeriod="May 2018 - Sep 2018"
              projectDescription="An interactive android application which serves as a vehicle to allow students to book, join, and gain from various study sessions occurring across the campus. Moreover, apart from being used as a platform to organise study sessions between various groups of students across NUS. It gives NUS students, especially undergraduates and freshmen, the ability to collaborate and consolidate their strengths and weaknesses within certain areas of their academic learning."
              haveButton="true"
              projectUrl="https://github.com/Limminghong/StudyLah"
            />
          </Grid>
        </Grid>
        <Grid container justify="center" alignItems="center" spacing={0}>
          <Grid item xs={12} md={3} align="center">
            <ProjectCards
              image="assets/images/portfolio-banner.png"
              projectTitle="Ming Hong's Portfolio"
              projectType="Personal Website"
              projectPeriod="Aug 2019 - Present"
              projectDescription="My personal portfolio website :) You are looking at it now!"
              haveButton="true"
              projectUrl="https://github.com/Limminghong/limminghong.github.io"
            />
          </Grid>
          <Grid item xs={12} md={3} align="center">
            <ProjectCards
              image="assets/images/activeaid-banner.png"
              projectTitle="Active Aid"
              projectType="IoT / Wearable Device"
              projectPeriod="Aug 2019 - Nov 2019"
              projectDescription="Knowing one’s level of exertion can prevent many injuries related to overexertion, as well as
              have a more satisfying workout. Our project aims to design an end-to-end Internet of Things
              (IoT) wearable device that can help users determine whether they are within a healthy range of
              physical exertion, and also determine if they are not hitting a high enough intensity to reach their
              fitness goals, should they have any."
              haveButton="false"
            />
          </Grid>
          <Grid item xs={12} md={3} align="center">
            <ProjectCards
              image="assets/images/vincent-banner.png"
              projectTitle="Vincent Search and Rescue Robot"
              projectType="Autonomous Search and Rescue Robot"
              projectPeriod="Feb 2018 - Apr 2018"
              projectDescription="Vincent is a search and rescue robot designed to navigate through post-disaster locations that are otherwise too difficult or too dangerous for humans to traverse. Using sensors to detect its surroundings, Vincent can provide information to its user and the rescue team about the current immediate environment. Using this knowledge, the rescue team can then command Vincent to move in specified directions to search for victims."
              haveButton="false"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
