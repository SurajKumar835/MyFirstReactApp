import React, { Component } from 'react';
import Projects from './Components/Projects';

class App extends Component {
  constructor(){
    super();
    this.state={
      projects:[
      {
        title:"Suraj",
        category:'WebDesign1'
      },
      {
        title: "Kumar",
        category: 'WebDesign2'
      },
      {
        title: "Social App",
        category: 'WebDesign3'
      }
      ]
    }
  }
  render() {
    return (
      <div className="App">
      My FirstApp
      <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;