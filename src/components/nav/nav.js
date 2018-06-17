import React from "react";
import "./nav.css";

const Nav = (props) => (
<nav class="navbar fixed-top navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
      <h1>The Clickster</h1>
    </a>
    <pre class="navTxt1 justify-content-end">SCORE: {props.score}          TOP SCORE: {props.TopScore}</pre>
  </nav>
);

export default Nav;
