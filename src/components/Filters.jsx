/* eslint-disable react/prop-types */
import React, { Component } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";
// import FormControl from '@mui/material/FormControl';
// import FormLabel from "@mui/material/FormLabel";

class Filters extends Component {
  state = {};

  render() {
    return (
      <div id="filter-outer">
        <Box
          sx={{
            display: "flex",
            "& > *": {
              m: 1,
            },
            flexDirection: "column",
          }}
        >
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined button group"
            variant="contained"
          >
            <InputLabel>Start Date</InputLabel>
            <TextField
              id="startDate"
              type="date"
              defaultValue={this.props.dateToday}
              onChange={this.props.startDate}
              sx={{
                background: "#fff",
                borderRadius: "5px",
                margin: "5px 0 0",
              }}
            />
            <InputLabel>End Date</InputLabel>
            <TextField
              id="endDate"
              type="date"
              defaultValue={this.props.dateToday}
              onChange={this.props.endDate}
              sx={{
                background: "#fff",
                borderRadius: "5px",
                margin: "5px 0 0",
              }}
            />
            <InputLabel>Event Type</InputLabel>
            <Select onChange={this.props.setEventType}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value={"drought"}>Drought</MenuItem>
              <MenuItem value={"dustHaze"}>Dust and Haze</MenuItem>
              <MenuItem value={"earthquakes"}>Earthquakes</MenuItem>
              <MenuItem value={"floods"}>Floods</MenuItem>
              <MenuItem value={"landslides"}>Landslides</MenuItem>
              <MenuItem value={"manmade"}>Man Made</MenuItem>
              <MenuItem value={"seaLakeIce"}>Sea and Lake Ice</MenuItem>
              <MenuItem value={"severeStorms"}>Severe Storms</MenuItem>
              <MenuItem value={"snow"}>Snow</MenuItem>
              <MenuItem value={"tempExtremes"}>Temperature Extremes</MenuItem>
              <MenuItem value={"volcanoes"}>Volcanoes</MenuItem>
              <MenuItem value={"waterColor"}>Water Color</MenuItem>
              <MenuItem value={"wildfires"}>Wildfires</MenuItem>
            </Select>

            <RadioGroup
              defaultValue="all"
              name="radio-buttons-group"
              sx={{ marginLeft: "10px" }}
              onChange={this.props.setEventStatus}
            >
              <FormControlLabel
                value="all"
                control={<Radio />}
                label="All Events"
              />
              <FormControlLabel
                value="open"
                control={<Radio />}
                label="Current Events"
              />
              <FormControlLabel
                value="closed"
                control={<Radio />}
                label="Past Events"
              />
            </RadioGroup>

            <Button key="submit" onClick={() => this.props.getApiData()}>
              Submit
            </Button>
          </ButtonGroup>
        </Box>
      </div>
    );
  }
}

export default Filters;
