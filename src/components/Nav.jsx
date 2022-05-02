/* eslint-disable react/prop-types */
import React from "react";

const Nav = (props) => {
  return (
    <div className="navButtonFrame">
      <button className="navButton" onClick={() => props.navigation("about")}>
        About
      </button>
      <button className="navButton" onClick={() => props.navigation("reports")}>
        Reports
      </button>
      <button className="navButton" onClick={() => props.navigation("contact")}>
        Contact
      </button>
    </div>
  );
};

export default Nav;
