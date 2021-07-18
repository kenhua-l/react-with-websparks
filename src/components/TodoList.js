import React, { Component } from 'react';
import TodoTask from '../components/TodoTask';

class TodoList extends Component {
  renderTaskList() {
    var tasks = this.props.taskList.map((task, index) => {
      return (
        <TodoTask 
          key={index}
          id={index}
          task={task}
          handleDelete={() => {
            this.props.onDelete(index)
          }}
        />
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