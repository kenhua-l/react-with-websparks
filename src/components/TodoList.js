import React, { Component } from 'react';

class TodoList extends Component {
  renderTaskList() {
    var tasks = this.props.taskList.map((task, index) => {
      return (
        <li key={index}>
          <p>{task}</p>
          <div className="list-action">
            <button className=""><span className="fas fa-edit"></span></button>
            <button className=""><span className="fas fa-times"></span></button>
          </div>
        </li>
      );
    });
    return (
      <ul>
        {tasks}
      </ul>
    );
  }
  
  render() {
    var taskList = this.renderTaskList();
    return (
      <div className="todo-list-container">
        {taskList}
      </div>
    );
  }
}

export default TodoList;