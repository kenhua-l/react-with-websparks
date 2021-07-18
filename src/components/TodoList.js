import React, { Component } from 'react';
import TodoTask from '../components/TodoTask';
import TodoAdd from '../components/TodoAdd';

class TodoList extends Component {
  renderTaskList() {
    var tasks = this.props.taskList.map((task, index) => {
      if(task.editMode) {
        return (
          <li key={index}>
            <TodoAdd
              editMode="true"
              value={task.task}
              editTask={(value) => {
                this.props.editTask(index, value);
              }}
            />
          </li>
        )
      } else {
        return (
          <TodoTask 
            key={index}
            id={index}
            task={task.task}
            handleEdit={() => {
              this.props.onEdit(index);
            }}
            handleDelete={() => {
              this.props.onDelete(index)
            }}
          />
        );
      }
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