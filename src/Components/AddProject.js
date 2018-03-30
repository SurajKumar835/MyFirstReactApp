import React, { Component } from "react";

class AddProject extends Component {
  static defaultProps={
    categories: ['WebDesign1', 'WebDesign2','WebDesign3']
  }
  render() {
    let categoryOption = this.props.categories.map(category => {return <option key={category} value="category">
    {category}</option>});
    return <div>
    <h3>Add Project</h3>
    <form>
    <div>
      <label>Title</label><br/>
      <input type='text' ref=""/>
      </div>
    <div>
      <label>Category</label><br />
      <select ref="category">
            {categoryOption}
      </select>
    </div>
    </form>
    </div>;
  }
}

export default AddProject;
