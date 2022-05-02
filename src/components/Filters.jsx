/* eslint-disable react/prop-types */
import React, { Component } from "react";
class Filters extends Component {
  state = {};
  render() {
    return (
      <>
        <div>
          filters
          <input type="text" onChange={this.props.typeFilter}></input>
        </div>
      </>
    );
  }
}

export default Filters;
