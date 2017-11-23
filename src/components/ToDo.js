// 1. import React and React's Component Class
import React, { Component } from 'react';


// 2. Define a class that extends Component
class ToDo extends Component {
  // 3. Define a render() method on your class.
  render() {
    return (
      <li>
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
        <span>{ this.props.description }</span>
      </li>
    );
  }
}
// 4. export the class
export default ToDo;
