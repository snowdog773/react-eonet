/* eslint-disable react/prop-types */
import React, { Component } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
        <Accordion
          expanded={this.state.expand === "expandYes" ? true : false}
          onClick={this.expand}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={this.props.e.title}
            id={this.props.e.title}
          >
            <Typography>{this.props.e.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>Date : {date}</p>
              <p>
                Global Coordinates : Longitude - {coordinates[0]}, Latitude{" "}
                {coordinates[1]}
              </p>
              {magnitudeUnit && magnitudeValue && (
                <p>
                  This event has a magnitude of {magnitudeValue} {magnitudeUnit}
                </p>
              )}
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* <div className="listItem" onClick={this.expand}>
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
        </div> */}
      </>
    );
  }
}

export default ListItem;
