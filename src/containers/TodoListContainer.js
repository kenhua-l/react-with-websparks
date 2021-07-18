import React, { Component } from 'react';
import TodoList from '../components/TodoList';

class TodoListContainer extends Component {
  render() {
    return (
      <section>
        <div class="container">
          <h1>{this.props.title}</h1>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="What to you want to do?" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
          </div>
          <TodoList />
        </div>
      </section>
    );
  }
}

export default TodoListContainer;