import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id='about'>
      <h2>About Me</h2>
      <p>This is My Content!</p>
      <img alt="I made this" src={image}/>
    </div>
  );
}

export default About;
