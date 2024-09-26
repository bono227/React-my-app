import React, { Component } from "react";

export default class ClassComponent extends Component {
  componentDidMount() {
    console.log("this will run after the component is displayed");
  }
  componentWillUnmount() {
    console.log("this will run when the component is romved");
  }
  componentDidUpdate() {
    console.log("this will run when the component is updated");
    console.log(this.props.theme);
  }
  render() {
    return (
      <div>
        <h1>This is a Class component</h1>
      </div>
    );
  }
}
