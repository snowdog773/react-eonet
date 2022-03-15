import React, { Component } from "react";
import ListItem from "./ListItem";
import Filters from "./Filters";

class Report extends Component {
  state = { type: "" };

  typeFilter = (e) => {
    console.log(e.target.value);
    this.setState({ type: e.target.value });
    console.log(this.state.type);
  };

  render() {
    return (
      <>
        <h2>report</h2>
        <div className="reportOuter">
          <Filters typeFilter={this.typeFilter} />
          <div className="eventList">
            {this.props.data.data.events.map((e, index) => (
              <ListItem key={index} e={e} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Report;
