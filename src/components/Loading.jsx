import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loading = () => {
  return (
    <div id="spinner">
      <Box sx={{ display: "block" }}>
        <CircularProgress
          sx={{ color: "#999", display: "block", margin: "auto" }}
          size={100}
        />
      </Box>
      <p id="loadingCircleTag">Loading...</p>
    </div>
  );
};

export default Loading;
