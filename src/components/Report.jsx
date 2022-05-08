/* eslint-disable react/prop-types */
import React, { Component } from "react";
import ListItem from "./ListItem";
import Filters from "./Filters";
import Loading from "./Loading";
import QuickFilter from "./QuickFilter";

class Report extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="reportOuter">
          <Filters
            typeFilter={this.props.typeFilter}
            buttonFilter={this.props.buttonFilter}
            clearFilter={this.props.clearFilter}
            getApiData={this.props.getApiData}
            startDate={this.props.startDate}
            endDate={this.props.endDate}
            dateToday={this.props.dateToday}
            setEventStatus={this.props.setEventStatus}
            setEventType={this.props.setEventType}
          />
          {this.props.loading ? (
            <Loading />
          ) : (
            <div className="event-list">
              {this.props.displayData.map((e, index) => (
                <ListItem
                  key={index}
                  e={e}
                  filterChange={this.props.filterChange}
                />
              ))}
            </div>
          )}
          <QuickFilter
            typeFilter={this.props.typeFilter}
            buttonFilter={this.props.buttonFilter}
            clearFilter={this.props.clearFilter}
          />
        </div>
      </>
    );
  }
}

export default Report;
