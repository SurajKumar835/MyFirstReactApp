import React, { Component } from "react";

class AddProject extends Component {
  constructor(){
    super();
    this.state={
      newProjects:{}
    }
  }
  static defaultProps={
    categories: ['WebDesign1', 'WebDesign2','WebDesign3']
  }
  handleSubmit(e)
  {
    if(this.refs.title.value==="")
    {
      alert('Asshole put title');
    }
    else{
      this.setState({newProjects:{
        title:this.refs.title.value,
        category:this.refs.category.value
      }},function(){
        //console.log(this.state);
        this.props.addProject(this.state.newProjects);
      })
    }
    e.preventDefault();
  }
  render() {
    let categoryOption = this.props.categories.map(category => {return <option key={category} value={category}>
    {category}</option>});
    return (
      <div>
    <h3>Add Project</h3>
    <form onSubmit={this.handleSubmit.bind(this)}>
    <div>
      <label>Title</label><br/>
      <input type='text' ref="title"/>
      </div>
    <div>
      <label>Category</label><br />
      <select ref="category">
            {categoryOption}
      </select>
    </div>
    <input type="submit" value="click!"/>
    </form>
    </div>
    );
  }
}

export default AddProject;
