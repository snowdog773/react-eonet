/* eslint-disable react/prop-types */
import React, { Component } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
class Filters extends Component {
  state = {};
  render() {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            "& > *": {
              m: 1,
            },
          }}
        >
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined button group"
          >
            <TextField
              id="filled-basic"
              label="Search Events by Title"
              variant="filled"
              onChange={this.props.typeFilter}
            />
            <Button key="showAll" onClick={this.props.clearFilter}>
              Show All
            </Button>
            <Button
              key="severeStorms"
              onClick={() => this.props.buttonFilter("severeStorms")}
            >
              Severe Storms
            </Button>
            <Button
              key="volcanoes"
              onClick={() => this.props.buttonFilter("volcanoes")}
            >
              Volcanoes
            </Button>
            <Button
              key="wildfires"
              onClick={() => this.props.buttonFilter("wildfires")}
            >
              Wildfires
            </Button>
            <Button
              key="seaLakeIce"
              onClick={() => this.props.buttonFilter("seaLakeIce")}
            >
              Icebergs
            </Button>
          </ButtonGroup>
        </Box>
      </>
    );
  }
}

export default Filters;
