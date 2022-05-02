/* eslint-disable react/prop-types */
import React, { Component } from "react";
import axios from "axios";
import Nav from "./Nav";
import About from "./About";
import Report from "./Report";
import Contact from "./Contact";

class Body extends Component {
  state = { page: "about", data: {}, displayData: {}, loading: true };
  //data is the entire object grabbed from the API, displayData is the manipulated version of that object we display

  navigation = (click) => this.setState({ page: click });
  // for conditionally rendering which page component is displayed
  componentDidMount() {
    axios.get("https://eonet.gsfc.nasa.gov/api/v3/events").then((res) => {
      this.setState({
        data: res,
        displayData: res.data.events,
        loading: false,
      });
      console.log(res);
    });
  }
  //fetches API data on mounting

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
    this.setState({ displayData: updated });
  };
  // filters data by event type buttons, typed input field will override
  render() {
    return (
      <>
        <Nav navigation={this.navigation} />
        <div>
          {this.state.page === "about" && <About />}
          {this.state.page === "reports" && (
            <Report
              data={this.state.data}
              displayData={this.state.displayData}
              typeFilter={this.typeFilter}
              buttonFilter={this.buttonFilter}
              loading={this.state.loading}
            />
          )}
          {this.state.page === "contact" && <Contact />}
        </div>
      </>
    );
  }
}

export default Body;
