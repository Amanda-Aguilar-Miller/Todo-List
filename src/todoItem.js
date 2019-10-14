import React from "react";
import { hostname } from "os";

class ToDoItem extends React.Component {
  constructor(props) {
    super();

    this.state = {
      done: props.done
    };
  }

  toggleDone = () => {
    fetch(`https://aam-todo-lists-app.herokuapp.com/todo${this.props.id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title: this.props.title,
        done: !this.state.done
      })
    }).then(this.setState({ done: !this.state.done }));
  };
  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          onChange={this.toggleDone}
          defaultChecked={this.state.done}
        />
        <p className={this.state.done && "done"}>{this.props.title}</p>
        <button onClick={() => this.props.delete(this.props.id)}>X</button>
      </div>
    );
  }
}

export default ToDoItem;
