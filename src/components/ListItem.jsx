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
      this.props.e.geometry[this.props.e.geometry.length - 1];
    const coords = [...coordinates].flat(2);
    console.log(coords);
    // Array.isArray(coordinates[0])
    //   ? (coords = [...coordinates[0]])
    //   : (coords = [...coordinates]);
    // console.log(coords);
    // some coordinates were returning as a series of coordinates in an array, this allows only the first pair to
    //return
    const matchDate = date.match(/\d{1,4}-\d{1,2}-\d{1,4}/);
    console.log(process.env.REACT_APP_MAP_KEY);
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
              <p>Date : {matchDate}</p>
              <p>
                Global Coordinates : Longitude - {coords[0]}, Latitude{" "}
                {coords[1]}
              </p>
              <iframe
                // src={`https://maps.google.com/maps?q=${coordinates[1]},${coordinates[0]}&maptype=satellite&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_MAP_KEY}&q=${coords[1]},${coords[0]}&maptype=satellite&zoom=13`}
                frameBorder="0"
                scrolling="no"
              ></iframe>
              {magnitudeUnit && magnitudeValue && (
                <div>
                  <p>
                    This event has a magnitude of {magnitudeValue}{" "}
                    {magnitudeUnit}
                  </p>
                  <p>
                    Source link :{" "}
                    <a
                      href={this.props.e.sources[0].url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {this.props.e.sources[0].url}
                    </a>
                  </p>
                </div>
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
