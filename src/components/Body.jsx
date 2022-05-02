/* eslint-disable react/prop-types */
import React, { Component } from "react";
import axios from "axios";
import Nav from "./Nav";
import About from "./About";
import Report from "./Report";
import Contact from "./Contact";

class Body extends Component {
  state = { page: "about", data: {}, displayData: {}, type: "" };
  //data is the entire object grabbed from the API, displayData is the manipulated version of that object we display

  navigation = (click) => this.setState({ page: click });
  // for conditionally rendering which page component is displayed
  componentDidMount() {
    axios.get("https://eonet.gsfc.nasa.gov/api/v3/events").then((res) => {
      this.setState({ data: res });
      this.setState({ displayData: res.data.events });
      console.log(res);
    });
  }
  //fetches API data on mounting

  typeFilter = (input) => {
    this.setState({ type: input.target.value });
    this.matching();
  };

  matching = () => {
    const matcher = new RegExp(`${this.state.type}`, "i");
    const updated = this.state.data.data.events.filter((e) =>
      matcher.test(e.title)
    );
    this.setState({ displayData: updated });
    console.log(this.state.type);
  };

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
            />
          )}
          {this.state.page === "contact" && <Contact />}
        </div>
      </>
    );
  }
}

export default Body;
