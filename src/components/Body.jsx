/* eslint-disable react/prop-types */
import React, { Component } from "react";
import axios from "axios";
import Nav from "./Nav";
import About from "./About";
import Report from "./Report";
import Contact from "./Contact";

class Body extends Component {
  state = {
    page: "reports",
    data: {},
    displayData: {},
    loading: true,
    filterChange: false,
    start: "",
    end: "",
    eventType: "",
    status: "",
    dateToday: "",
  };
  //data is the entire object grabbed from the API, displayData is the manipulated version of that
  //object we display. filterChange is a boolean that allows listItem components to close their expanded
  // states by comparing to prevProps when a filter is updated. Every time a filter method is called,
  // filterchange flips from true to false or vice versa.

  navigation = (click) => this.setState({ page: click });
  // for conditionally rendering which page component is displayed
  componentDidMount() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    const dateToday = `${yyyy}-${mm}-${dd}`;
    this.setState({ dateToday });
    
    axios
      .get("https://eonet.gsfc.nasa.gov/api/v3/events?status=all&days=100")
      .then((res) => {
        this.setState({
          data: res,
          displayData: res.data.events,
          loading: false,

          start: dateToday,
          end: dateToday,
          status: "all",
        });
        console.log(this.state.data);
      });
  }
  //fetches API data on mounting

  getApiData = () => {
    this.setState({ loading: true });
    axios
      .get(
        `https://eonet.gsfc.nasa.gov/api/v3/events?status=${this.state.status}&start=${this.state.start}&end=${this.state.end}&category=${this.state.eventType}`
      )
      .then((res) => {
        this.setState({
          data: res,
          displayData: res.data.events,

          loading: false,
        });
      });
  };

  //getApiData returns a new API request based on the selections on the left hand panel of the page.
  // Is called when "submit" is pressed

  startDate = (input) => {
    this.setState({ start: input.target.value });
  };
  endDate = (input) => {
    this.setState({ end: input.target.value });
  };

  setEventStatus = (input) => {
    this.setState({ status: input.target.value });
  };

  setEventType = (input) => {
    this.setState({ eventType: input.target.value });
  };

  // these 4 functions save the current value of the options on the left hand panel to state
  // ready to be used in the API call when "submit" is pressed

  typeFilter = (input) => {
    const matcher = new RegExp(`${input.target.value}`, "i");
    const updated = this.state.data.data.events.filter((e) =>
      matcher.test(e.title)
    );
    this.setState({ displayData: updated });
  };
  // live filters results based on contents of text box

  buttonFilter = (input) => {
    const updated = this.state.data.data.events.filter((e) =>
      e.categories.find((f) => f.id === input)
    );

    this.state.filterChange
      ? this.setState({ filterChange: false, displayData: updated })
      : this.setState({ filterChange: true, displayData: updated });
  };
  // filters data by event type buttons, typed input field will override

  clearFilter = () => {
    this.state.filterChange
      ? this.setState({
          filterChange: false,
          displayData: this.state.data.data.events,
        })
      : this.setState({
          filterChange: true,
          displayData: this.state.data.data.events,
        });
  };
  // resets displayData to the currently downloaded data object via the Clear Filters button
  render() {
    return (
      <>
        <Nav navigation={this.navigation} />
        <div>
          {this.state.page === "about" && <About />}
          {this.state.page === "reports" &&
            (this.state.dateToday ? (
              <Report
                data={this.state.data}
                displayData={this.state.displayData}
                typeFilter={this.typeFilter}
                buttonFilter={this.buttonFilter}
                clearFilter={this.clearFilter}
                loading={this.state.loading}
                filterChange={this.state.filterChange}
                getApiData={this.getApiData}
                startDate={this.startDate}
                endDate={this.endDate}
                dateToday={this.state.dateToday}
                setEventStatus={this.setEventStatus}
                setEventType={this.setEventType}
              />
            ) : null)}
          {this.state.page === "contact" && <Contact />}
        </div>
      </>
    );
  }
}

export default Body;
