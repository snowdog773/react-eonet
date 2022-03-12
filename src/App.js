import React, { Component } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <Body />
        <Footer />
      </>
    );
  }
}

export default App;
