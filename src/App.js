import React, { Component } from 'react';
import Header from "./components/layout/Header";
import Todos from './components/Todos'
import AddTodo from "./components/AddTodo"
import './App.css';

/** Ref: https://www.youtube.com/watch?v=sBws8MSXN7A*/
class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Dinner with frens",
        completed: true
      },
      {
        id: 3,
        title: "Meet with boss",
        completed: false
      },
    ]
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
    // Filter out any IDs that does not match the passed in ID
    // Then, set the state with the remaining IDs
    this.setState(
      {todos: [...this.state.todos.filter(todoElem => 
        todoElem.id != id
      )]});
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos todos={this.state.todos} markComplete={ this.toggleComplete }
          delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
