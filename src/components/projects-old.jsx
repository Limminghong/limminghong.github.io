import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardActions,
  CardTitle,
  CardText,
  Button
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {this.cardProjectOne()}
          {this.cardProjectTwo()}
          {this.cardProjectThree()}
          {this.cardProjectFour()}
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return <div className="projects-grid">{this.cardProjectOne()}</div>;
    } else if (this.state.activeTab === 2) {
      return <div className="projects-grid">{this.cardProjectTwo()}</div>;
    } else if (this.state.activeTab === 3) {
      return <div className="projects-grid">{this.cardProjectThree()}</div>;
    } else if (this.state.activeTab === 4) {
      return <div className="projects-grid">{this.cardProjectFour()}</div>;
    }
  }

  cardProjectOne() {
    return (
      <Card
        shadow={5}
        style={{ minWidth: "450", margin: "auto", background: "transparent" }}
      >
        <CardTitle
          style={{
            color: "#fff",
            height: "176px",
            background: "url(images/placeholder.png) center / cover"
          }}
        >
          Placeholder 1
        </CardTitle>
        <CardText style={{ color: "#fff" }}>Placeholder 1</CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
        </CardActions>
      </Card>
    );
  }

  cardProjectTwo() {
    return (
      <Card
        shadow={5}
        style={{ minWidth: "450", margin: "auto", background: "transparent" }}
      >
        <CardTitle
          style={{
            color: "#fff",
            height: "176px",
            background: "url(images/placeholder.png) center / cover"
          }}
        >
          Placeholder 2
        </CardTitle>
        <CardText style={{ color: "#fff" }}>Placeholder 2</CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
        </CardActions>
      </Card>
    );
  }

  cardProjectThree() {
    return (
      <Card
        shadow={5}
        style={{ minWidth: "450", margin: "auto", background: "transparent" }}
      >
        <CardTitle
          style={{
            color: "#fff",
            height: "176px",
            background: "url(images/placeholder.png) center / cover"
          }}
        >
          Placeholder 3
        </CardTitle>
        <CardText style={{ color: "#fff" }}>Placeholder 3</CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
        </CardActions>
      </Card>
    );
  }

  cardProjectFour() {
    return (
      <Card
        shadow={5}
        style={{ minWidth: "450", margin: "auto", background: "transparent" }}
      >
        <CardTitle
          style={{
            color: "#fff",
            height: "176px",
            background: "url(images/placeholder.png) center / cover"
          }}
        >
          Placeholder 4
        </CardTitle>
        <CardText style={{ color: "#fff" }}>Placeholder 4</CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
        </CardActions>
      </Card>
    );
  }

  render() {
    return (
      <div className="catagory-tabs projects-body" id="projects">
        <h1>Projects</h1>
        <hr />
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>
            <p>All</p>
          </Tab>
          <Tab>
            <p>Robotics</p>
          </Tab>
          <Tab>
            <p>Machine Learning</p>
          </Tab>
          <Tab>
            <p>Web</p>
          </Tab>
          <Tab>
            <p>Apps</p>
          </Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
