/* eslint-disable react/prop-types */
import React, { Component } from "react";
import ListItem from "./ListItem";
import Filters from "./Filters";

class Report extends Component {
  state = {};

  render() {
    return (
      <>
        <h2>report</h2>

        {this.props.loading ? (
          <p>loading</p>
        ) : (
          <div className="reportOuter">
            <Filters
              typeFilter={this.props.typeFilter}
              buttonFilter={this.props.buttonFilter}
              clearFilter={this.props.clearFilter}
            />
            <div className="eventList">
              {this.props.displayData.map((e, index) => (
                <ListItem key={index} e={e} />
              ))}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Report;
