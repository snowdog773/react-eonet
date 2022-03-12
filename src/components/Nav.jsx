import React from "react";

const Nav = (props) => {
  return (
    <>
      <button onClick={() => props.navigation("about")}>About</button>
      <button onClick={() => props.navigation("reports")}>Reports</button>
      <button onClick={() => props.navigation("contact")}>Contact</button>
    </>
  );
};

export default Nav;
