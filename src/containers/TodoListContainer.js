import React, { Component } from 'react';

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
          <div class="todo-list-container">
            <ul>
              <li>
                <p>
                  Send an email update to the team: 9am today
                </p>
                <div class="list-action">
                  <button class=""><span class="fas fa-edit"></span></button>
                  <button class=""><span class="fas fa-times"></span></button>
                </div>
              </li>
              <li>
                <p>
                  Call the design agency to finalize mockups: 1:00pm today
                </p>
                <div class="list-action">
                  <button class=""><span class="fas fa-edit"></span></button>
                  <button class=""><span class="fas fa-times"></span></button>
                </div>
              </li>
              <li>
                <p>
                  Touch base with recruiters about new role: Tuesday
                </p>
                <div class="list-action">
                  <button class=""><span class="fas fa-edit"></span></button>
                  <button class=""><span class="fas fa-times"></span></button>
                </div>
              </li>
              <li>
                <p>
                  Meet with the engineering team: Thursday
                </p>
                <div class="list-action">
                  <button class=""><span class="fas fa-edit"></span></button>
                  <button class=""><span class="fas fa-times"></span></button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default TodoListContainer;