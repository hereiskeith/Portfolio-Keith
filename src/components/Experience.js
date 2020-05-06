import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const Experience = (props) => {
  return (
    <div id="experience" className="experienceWrapper animatedSection animated">
      <h3 className="experienceTitle">Experience</h3>
      <div className="eachExperience">
        <h4 className="jobTitle">
          Front-end Developer&nbsp;
          <span className="jobDuration">May 2019 – Present</span>
        </h4>
        <h5 className="jobLocation">
          <LocationOnIcon className="locationIcon" />
          &nbsp;University of Ottawa
        </h5>

        <p className="jobDetail">
          Experiencing and proficient in following Technology: React, Redux,
          Material-UI, BootStrap, SASS, Highcharts and others. Working on a
          React e-commerce project from the ground up – design, development,
          debugging, troubleshooting, testing, delivery and maintenance. Able to
          effectively self-manage during independent tasks, as well as
          collaborating in a team setting.
        </p>
      </div>
    </div>
  );
};

export default Experience;
