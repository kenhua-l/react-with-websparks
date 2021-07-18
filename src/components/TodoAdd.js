import React, { Component } from 'react';

class TodoAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      value: this.props.value
    };
  }

  resetState() {
    this.setState({
      value: this.props.value,
    });
  }

  handleAdd(value) {
    this.props.onAdd(value);
    this.resetState();
  }
  
  render() {
    return (
      <div className="input-group mb-3">
        <input 
          type="text" 
          className="form-control" 
          placeholder="What to you want to do?" 
          aria-label="New Task" 
          aria-describedby="task-add"
          ref={(input) => (this.textInput = input)}
          value={this.state.value}
          onChange={(e) => { 
            this.setState({ value: e.target.value });
          }}
          onKeyPress={(e) => {
            if(e.key === 'Enter') {
              this.handleAdd(this.state.value);
            }
          }}
        />
        <button 
          className="btn btn-outline-secondary" 
          type="button" 
          id="task-add"
          onClick={() => {
            this.handleAdd(this.state.value)
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

TodoAdd.defaultProps = {
  id: 0,
  value: '',
}

export default TodoAdd;