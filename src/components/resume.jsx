import React, { Component } from "react";
import Education from "./education";
import Experience from "./experience";
import Skill from "./skill";

class Resume extends Component {
  render() {
    return (
      <div className="resume-body" id="resume">
        <h1>Resume</h1>
        <hr />
        <h2>Education</h2>
        <Education
          startYear={2017}
          endYear={"Present"}
          schoolName={"National University of Singapore"}
          schoolDescription={"Blah"}
        />

        <hr style={{ borderTop: "3px solid #e22947" }} />

        <h2>Experience</h2>
        <Experience
          startYear={2019}
          endYear={2019}
          jobName={"Intern"}
          jobDescription={"Blah"}
        />

        <hr style={{ borderTop: "3px solid #e22947" }} />

        <h2>Skills</h2>
        <Skill />
      </div>
    );
  }
}

export default Resume;
