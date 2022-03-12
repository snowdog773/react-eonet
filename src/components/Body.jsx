import React, { Component } from "react";
import axios from "axios";
import Nav from "./Nav";
import About from "./About";
import Report from "./Report";
import Contact from "./Contact";

class Body extends Component {
  state = { page: "about", data: {} };

  navigation = (click) => this.setState({ page: click });

  componentDidMount() {
    axios.get("https://eonet.gsfc.nasa.gov/api/v3/events").then((res) => {
      this.setState({ data: res });
      console.log(res);
    });
  }

  render() {
    return (
      <>
        <Nav navigation={this.navigation} />
        <div>
          {this.state.page === "about" && <About />}
          {this.state.page === "reports" && <Report data={this.state.data} />}
          {this.state.page === "contact" && <Contact />}
        </div>
      </>
    );
  }
}

export default Body;
