/* eslint-disable react/prop-types */
import React, { Component } from "react";
class ListItem extends Component {
  state = { expand: "expandNo" };

  expand = () =>
    this.state.expand === "expandNo"
      ? this.setState({ expand: "expandYes" })
      : this.setState({ expand: "expandNo" });

  componentDidUpdate(prevProps) {
    if (prevProps.filterChange !== this.props.filterChange)
      this.setState({ expand: "expandNo" });
  }

  render() {
    const { coordinates, date, magnitudeUnit, magnitudeValue } =
      this.props.e.geometry[0];
    return (
      <>
        <div className="listItem" onClick={this.expand}>
          <p>{this.props.e.title}</p>

          <div className={this.state.expand}>
            <p>{date}</p>
            <p>
              longitude {coordinates[0]}, latitude {coordinates[1]}
            </p>
            {magnitudeUnit && magnitudeValue && (
              <p>
                {magnitudeValue} {magnitudeUnit}
              </p>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default ListItem;
