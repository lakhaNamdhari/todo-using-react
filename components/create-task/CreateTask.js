
/* This prints apps header */

import React from 'react';

class CreateTask extends React.Component {
  render() {
    return(
      <div className="create-task">
        <input type="text" value={this.props.newTaskName} onChange={this.props.addNewTaskName} /> 
        <button type="submit" onClick={this.props.createTask} >create</button> 
      </div>
    );
  }
}

export default CreateTask;