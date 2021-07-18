import React, { Component } from 'react';
import TodoList from '../components/TodoList';
import TodoAdd from '../components/TodoAdd';

class TodoListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          task: 'Send an email update to the team: 9am today',
          editMode: false
        }, 
        {
          task: 'Call the design agency to finalize mockups: 1:00pm today',
          editMode: false
        },
        {
          task: 'Touch base with recruiters about new role: Tuesday',
          editMode: false
        },
        {
          task: 'Meet with the engineering team: Thursday',
          editMode: false
        }
      ]
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.editTask = this.editTask.bind(this);
  }

  handleAdd(newTaskName) {
    const tasks = this.state.tasks;
    var newTask = {
      task: newTaskName,
      editMode: false
    }
    this.setState({
      tasks: tasks.concat(newTask)
    })
  }

  handleDelete(id) {
    var tasks = this.state.tasks;
    tasks.splice(id, 1);
    this.setState({
      tasks: tasks
    })
  }

  handleEdit(id) {
    var tasks = this.state.tasks;
    var taskToEdit = tasks[id];
    taskToEdit.editMode = true;
    tasks[id] = taskToEdit;
    this.setState({ tasks })
  }

  editTask(id, newTask) {
    console.log(id, newTask);
    var tasks = this.state.tasks;
    var taskToEdit = tasks[id];
    taskToEdit.task = newTask;
    taskToEdit.editMode = false;
    tasks[id] = taskToEdit;
    this.setState({ tasks });
  }

  render() {
    return (
      <section>
        <div className="container">
          <h1>{this.props.title}</h1>
          <TodoAdd 
            onAdd={this.handleAdd}
          />
          <TodoList 
            taskList={this.state.tasks}
            onEdit={this.handleEdit}
            onDelete={this.handleDelete}
            editTask={this.editTask}
          />
        </div>
      </section>
    );
  }
}

export default TodoListContainer;