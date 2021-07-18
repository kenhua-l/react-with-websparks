import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <nav className="nav navbar">
        <ul className="nav ">
          <li className="nav-item">
            <Link className="nav-link" to="/todo-list">To-Do List</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/success-page">Finish Tutorial</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation;