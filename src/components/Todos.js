import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

/** Ref: https://www.youtube.com/watch?v=sBws8MSXN7A*/
class Todos extends Component {
  state = {

  }

  render() {
    return this.props.todos.map( (todoElem) => (
      <TodoItem key={ todoElem.id } todoElem={ todoElem }
      markComplete={ this.props.markComplete }
      delTodo={this.props.delTodo}/>
    ));
  }
}

// Prop Types
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default Todos;
