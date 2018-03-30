import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';

class App extends Component {
  constructor(){
    super();
    this.state={
      projects:[]
    }
  }

componentWillMount(){//lifecycle method of React
this.setState({projects:[
  {
    title: "Suraj",
    category: 'WebDesign1'
  },
  {
    title: "Kumar",
    category: 'WebDesign2'
  },
  {
    title: "Social App",
    category: 'WebDesign3'
  }
]});
}

  handleAddProjects(project){
    let projects=this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
      <AddProject addProject={this.handleAddProjects.bind(this)}/>
      <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;