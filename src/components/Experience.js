import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const Experience = (props) => {
  return (
    <div id="experience" className="experienceWrapper animatedSection animated">
      <h3 className="experienceTitle">Experience</h3>
      <div className="eachExperience">
        <h4 className="jobTitle">
          Front-end Developer&nbsp;
          <span className="jobDuration">April 2020 – Present</span>
        </h4>
        <h5 className="jobLocation">
          <LocationOnIcon className="locationIcon" />
          &nbsp;Eleduck
        </h5>

        <p className="jobDetail">
          Links:{" "}
          <a href="https://github.com/eleduck/maskhero">
            https://github.com/eleduck/maskhero
          </a>
          <br />
          Main contributor to the open-source project: a Covid-19 event to help
          people all across the world; Built through React and has raised 3700
          masks & over 10,000 Chinese Yuan and assisted 260 families; Optimized
          Jest and Babel configurations with Webpack and performed unit-tests
          for components; Followed Git & Github workflow to collaborate with
          other contributors;
        </p>
      </div>

      <div className="eachExperience">
        <h4 className="jobTitle">
          Front-end Developer&nbsp;
          <span className="jobDuration">April 2020 – Present</span>
        </h4>
        <h5 className="jobLocation">
          <LocationOnIcon className="locationIcon" />
          &nbsp;OcuXcel, Ottawa, Canada
        </h5>

        <p className="jobDetail">
          Tech Stack: Angular, TypeScript, RxJS, Angular Material, Firebase,
          AngularFire, Nx CLI <br />
          Volunteer of a humanitarian project to enhance the capability of
          telehealth during Covid-19 closure of medical clinics, cancellation of
          regular appointments and check-ups; Developing a web app to enable
          certain patients to perform self-tests and connect with their doctors;
          Following Agile development and using Agile development methodologies
          through the development cycle;
        </p>
      </div>

      <div className="eachExperience">
        <h4 className="jobTitle">
          Front-end Developer&nbsp;
          <span className="jobDuration">May 2019 – May 2020</span>
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
