/* eslint-disable react/prop-types */
import React, { Component } from "react";
class Filters extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="filterButtons">
          filters
          <input type="text" onChange={this.props.typeFilter}></input>
          <button onClick={() => this.props.buttonFilter("severeStorms")}>
            Severe Storms
          </button>
          <button onClick={() => this.props.buttonFilter("volcanoes")}>
            Volcanoes
          </button>
          <button onClick={() => this.props.buttonFilter("wildfires")}>
            Wild Fires
          </button>
          <button onClick={() => this.props.buttonFilter("seaLakeIce")}>
            Icebergs
          </button>
          <button onClick={this.props.clearFilter}>Clear Filters</button>
        </div>
      </>
    );
  }
}

export default Filters;
