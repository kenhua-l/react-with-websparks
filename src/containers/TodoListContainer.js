import React, { Component } from 'react';
import Axios from 'axios';
import TodoList from '../components/TodoList';
import TodoAdd from '../components/TodoAdd';
import Api from '../helpers/Api';

class TodoListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
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

  fetchTasks() {
    Api.getTasks().then((res) => {
      var tasks = [];
      var taskList = res.data;
      taskList.forEach((task) => {
        tasks.push({
          task: task,
          editMode: false
        })
      });
      this.setState({ tasks })
    }).catch((err) => {
      console.log('Error fetching data: ' + err);
    });
  }

  componentDidMount() {
    this.fetchTasks();
  }
}

export default TodoListContainer;