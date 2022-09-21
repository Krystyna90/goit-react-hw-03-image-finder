import React, { Component } from "react";
import css from "./Modal.module.css";

export default class Modal extends Component {
  componentDidMount() {
    console.log("Modal did mount");
  }
  componentWillUnmount() {
    console.log("Modal did unmount");
  }
  render() {
    return (
      <div className={css.Overlay}>
        <div className={css.Modal}>{this.props.children}</div>
      </div>
    );
  }
}
