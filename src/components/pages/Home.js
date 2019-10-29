import React, { Component } from 'react';
import Todos from '../Todos';
import AddTodo from '../AddTodo';
import axios from 'axios';
// import uuid from 'uuid';
import '../../App.css';

/** Ref: https://www.youtube.com/watch?v=sBws8MSXN7A*/
class Home extends Component {
  // constructor(props) {
  //   super(props);
  // }

  state = {
    todos: [

    ]
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({todos: res.data}));
  }

  toggleComplete = (id) => {
    // Iterate through all todo elements
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })});
  }

  delTodo = (id) => {
    axios.delete("https://jsonplaceholder.typicode.com/todos/${id}")
      .then(res => 
        // Filter out any IDs that does not match the passed in ID
        // Then, set the state with the remaining IDs
        this.setState(
          {todos: [...this.state.todos.filter(todoElem => 
            todoElem.id != id
          )]}
        )
      );
  }

  // Add Todo
  addTodo = (title) => {
    axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title: title,
        completed: false
      }
    )
      .then(res => this.setState({
          todos: [...this.state.todos, res.data]
        })
      );
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={ this.toggleComplete }
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default Home;
