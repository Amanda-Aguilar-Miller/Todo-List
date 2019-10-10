import React from "react";

class ToDoItem extends React.Component {
  constructor(props) {
    super();

    this.state = {
      done: false
    };
  }
  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          onChange={() => this.setState({ done: !this.state.done })}
        />
        <p className={this.state.done && "done"}>{this.props.title}</p>
      </div>
    );
  }
}

export default ToDoItem;