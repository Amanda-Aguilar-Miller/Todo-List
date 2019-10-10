import React from "react";

import ToDoItem from "./todoItem";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      todo: ""
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/todos")
      .then(response => response.json())
      .then(data => this.setState({ todos: data }));
  }

  renderTodos = () => {
    return this.state.todos.map(todo => {
      return <ToDoItem title={todo.title} />;
    });
  };

  handleChange = event => {
    this.setState({ todo: event.target.value });
  };

  addTodo = event => {
    event.preventDefault();
    fetch("http://localhost:5000/todo", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title: this.state.todo,
        done: false
      })
    })
      .then(response => response.json())
      .then(data =>
        this.setState({
          todos: [...this.state.todos, data],
          todo: ""
        })
      );
  };

  render() {
    return (
      <div className="App">
        <h1>To-Do List</h1>
        <form onSubmit={this.addTodo}>
          <input
            type="text"
            placeholder="Add ToDo"
            value={this.state.todo}
            onChange={this.handleChange}
          ></input>
          <button type="submit">Add</button>
        </form>
        {this.renderTodos()}
      </div>
    );
  }
}

export default App;
