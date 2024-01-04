import React from "react";

export default class About extends React.Component {
  render() {
    console.log(this);
    return (
      <div>
        <h1>About</h1>
        <h1>Hi {this.props.name}</h1>
      </div>
    );
  }
}
