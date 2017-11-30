// 1. import React and React's Component Class
import React, { Component } from 'react';


// 2. Define a class that extends Component
class ToDo extends Component {
  removeItem(index) {
    this.props.deleteTodo(index);
  }
  // 3. Define a render() method on your class.
  render() {
    return (
      <li>
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
        <span>{ this.props.description }</span>
          <button type="button" onClick={ () => { this.removeItem(this.props.key) }} key={this.props.key}>
                [X]
          </button>
      </li>
    );
  }
}
// 4. export the class
export default ToDo;
