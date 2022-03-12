import React, { Component } from "react";
class ListItem extends Component {
  state = { expand: "expandNo" };

  expand = () =>
    this.state.expand === "expandNo"
      ? this.setState({ expand: "expandYes" })
      : this.setState({ expand: "expandNo" });

  render() {
    return (
      <>
        <div className="listItem" onClick={this.expand}>
          <p>{this.props.e.title}</p>
          <p>{this.props.e.geometry[0].date}</p>
          <div className={this.state.expand}></div>
        </div>
      </>
    );
  }
}

export default ListItem;
