import React, { Component } from "react";
import TaskClass from "../Task/TaskClass";
import "./user.scss";

const userData = { username: "Java", age: 25, email: "java25@gmail.com" };

export default class User extends Component {
  constructor() {
    super();
    this.state = { username: "", age: 0, email: "", error: false };
  }

  addAge = () => {
    this.setState({ age: this.state.age + 1 });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ ...userData });
    }, 2000);
  }

  componentDidUpdate() {
    console.log("updated some value");
  }

  componentWillUnmount() {
    console.log("unmounted");
  }
  componentDidCatch(error) {
    this.setState({ error: true });
    console.log("error while unmounting");
  }

  //  this.setState({ ...userData });

  render() {
    return (
      <div className="user">
        <ul>
          <li>Username:{this.state.username}</li>
          <li>Age:{this.state.age}</li>
          <li>Email:{this.state.email}</li>
        </ul>
        <button onClick={this.addAge}>add Age</button>
        {/* {this.state.error ? <h1>Child has an Error</h1> : <TaskClass />} */}
      </div>
    );
  }
}
