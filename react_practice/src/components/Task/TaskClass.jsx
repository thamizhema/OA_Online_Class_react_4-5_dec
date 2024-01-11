import React, { Component } from "react";
export default class TaskClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      username: "JS",
      boxes: [{ name: "JS" }, { name: "PYthon" }],
      course_name: "",
    };
  }
  testFunction = () => {
    console.log(this);
  };
  addCount = () => {
    // this.setState({ count: this.state.count + 1 });
    this.setState({ boxes: [...this.state.boxes, ""] });
  };
  imputHandle = (event) => {
    // console.log(event.target.value);
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    this.setState({ [name]: event.target.value });
  };

  render() {
    return (
      <div>
        <p>{this.my}</p>
        <h1>
          {this.state.username} Component {this.state.count}
        </h1>
        <button onClick={this.testFunction}>Click</button>
        <button onClick={this.addCount}>Add</button>
        <input
          type="text"
          name="course_fee"
          onChange={this.imputHandle}
          value={this.state.course_fee}
        />
        <input
          type="text"
          name="course_name"
          onChange={this.imputHandle}
          value={this.state.course_name}
        />
        <div className="main-box">
          {this.state.boxes.map((box, ind) => {
            return (
              <div key={ind} className="box">
                {box.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
