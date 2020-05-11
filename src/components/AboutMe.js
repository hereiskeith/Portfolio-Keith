import React from "react";
import Tags from "./Tags";

const AboutMe = (props) => {
  return (
    <div id="about" className="aboutMeWrapper">
      <h3 className="aboutMe-title animatedSection animated">About Me</h3>
      <p className="animatedSection animated">
        I am a Front-end Developer with endless curiosity. I am passionate about
        everything of JavaScript and Web Development. When I undertake a project
        or task, I don’t just complete it. I go the extra mile and make it
        better than requested.
        <br />
        <br />
        <span className="onlyMobileAndTabletShown animatedSection animated">
          Please feel free to browse around via:
        </span>
      </p>
      <Tags className="onlyMobileAndTabletShown animatedSection animated" />
    </div>
  );
};

export default AboutMe;
