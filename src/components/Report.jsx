/* eslint-disable react/prop-types */
import React, { Component } from "react";
import ListItem from "./ListItem";
import Filters from "./Filters";
import Loading from "./Loading";

class Report extends Component {
  state = {};

  render() {
    return (
      <>
        {/* <h2>report</h2> */}

        <div className="reportOuter">
          <Filters
            typeFilter={this.props.typeFilter}
            buttonFilter={this.props.buttonFilter}
            clearFilter={this.props.clearFilter}
          />
          {this.props.loading ? (
            <Loading />
          ) : (
            <div className="eventList">
              {this.props.displayData.map((e, index) => (
                <ListItem
                  key={index}
                  e={e}
                  filterChange={this.props.filterChange}
                />
              ))}
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Report;
