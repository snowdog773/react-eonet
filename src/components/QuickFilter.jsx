/* eslint-disable react/prop-types */
import React, { Component } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

class QuickFilter extends Component {
  state = {};
  render() {
    const eventTypes = {
      drought: "Drought",
      dustHaze: "Dust and Haze",
      earthquakes: "Earthquakes",
      floods: "Floods",
      landslides: "Landslides",
      manmade: "Manmade",
      seaLakeIce: "Sea and Lake Ice",
      severeStorms: "Severe Storms",
      snow: "Snow",
      tempExtremes: "Temperature Extremes",
      volcanoes: "Volcanoes",
      waterColor: "Water Colour",
      wildfires: "Wildfires",
    };
    return (
      <div className="quick-filter">
        <Box
          sx={{
            display: "flex",
            "& > *": {
              m: 1,
            },
            flexDirection: "column",
            marginTop: "8px",
            marginBottom: "50px",
          }}
        >
          <TextField
            // id="filled-basic"
            label="Search Events by Title"
            variant="outlined"
            onChange={this.props.typeFilter}
            sx={{ background: "#fff", margin: "0 8px" }}
          />
          <p className="filter-label">Quick Filters</p>
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined button group"
            variant="contained"
          >
            <Button key="showAll" onClick={this.props.clearFilter}>
              Show All
            </Button>
            {Object.entries(eventTypes).map(([key, value]) => {
              const stringKey = key.toString();
              return (
                <Button
                  key={stringKey}
                  onClick={() => this.props.buttonFilter(stringKey)}
                >
                  {value}
                </Button>
              );
            })}
          </ButtonGroup>
        </Box>
      </div>
    );
  }
}

export default QuickFilter;
