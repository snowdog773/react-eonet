import React, { Component } from "react";
import ListItem from "./ListItem";
import Filters from "./Filters";

class Report extends Component {
  state = {};

  render() {
    return (
      <>
        <h2>report</h2>
        <div className="reportOuter">
          <Filters />
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
