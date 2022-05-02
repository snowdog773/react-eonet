/* eslint-disable react/prop-types */
import React, { Component } from "react";
import ListItem from "./ListItem";
import Filters from "./Filters";

class Report extends Component {
  state = { type: "" };

  // typeFilter = (input) => {
  //   // this.setState({ type: input.target.value });
  //   console.log(this.state.type);
  //   const matcher = /volcano/i;
  //   const updated = this.props.data.displayData.events.filter((e) => matcher.test(e.title));
  //   this.setState({displayData : updated})

  // };

  render() {
    return (
      <>
        <h2>report</h2>
        <div className="reportOuter">
          <Filters typeFilter={this.props.typeFilter} />
          <div className="eventList">
            {this.props.displayData.map((e, index) => (
              <ListItem key={index} e={e} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Report;
