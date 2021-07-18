import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        'Send an email update to the team: 9am today',
        'Call the design agency to finalize mockups: 1:00pm today',
        'Touch base with recruiters about new role: Tuesday',
        'Meet with the engineering team: Thursday'
      ]
    }
  }

  renderTaskList() {
    var tasks = this.state.tasks.map((task, index) => {
      return (
        <li key={index}>
          <p>{task}</p>
          <div class="list-action">
            <button class=""><span class="fas fa-edit"></span></button>
            <button class=""><span class="fas fa-times"></span></button>
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
      <div class="todo-list-container">
        {taskList}
      </div>
    );
  }
}

export default TodoList;