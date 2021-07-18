import React, { Component } from 'react';
import TodoList from '../components/TodoList';
import TodoAdd from '../components/TodoAdd';

class TodoListContainer extends Component {
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
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAdd(newTask) {
    const tasks = this.state.tasks;
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
            onDelete={this.handleDelete}
          />
        </div>
      </section>
    );
  }
}

export default TodoListContainer;