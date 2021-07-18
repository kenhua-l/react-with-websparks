import React from 'react';

function TodoTask(props) {
  return (
    <li>
      <p>{props.task}</p>
      <div className="list-action">
        <button 
          onClick={(e) => {
            props.handleEdit()
          }}
        >
          <span className="fas fa-edit"></span>
        </button>
        <button
          onClick={(e) => {
            props.handleDelete()
          }}
        >
          <span className="fas fa-times"></span>
        </button>
      </div>
    </li>
  );
}

export default TodoTask;