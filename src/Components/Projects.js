import React, { Component } from "react";
import ProjectItem from "./ProjectItem";
class Projects extends Component {
  render() {
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map(projects => {
        // console.log(projects);
        return <ProjectItem key={projects.title} project={projects} />;
      });
    }

    return <div className="Projects">{projectItems}</div>;
  }
}

export default Projects;
