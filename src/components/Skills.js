import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core";

const Skills = (props) => {
  const skills = [
    { skill: "JavaScript", value: 90, color: "#20c997" },
    { skill: "HTML/CSS", value: 80, color: "#dc3545" },
    { skill: "RxJs", value: 85, color: "#dc3545" },
    { skill: "React", value: 80, color: "#20c997" },
    { skill: "TypeScript", value: 85, color: "#6f42c1" },
    { skill: "MySQL/MongoDB", value: 70, color: "#6f42c1" },
    { skill: "NgRx", value: 85, color: "#dc3545" },
    { skill: "Angular", value: 90, color: "#20c997" },
  ];

  const eachSkill = () => {
    return skills.map((each) => {
      const BorderLinearProgress = withStyles({
        root: {
          height: 8,
          borderRadius: 10,
          backgroundColor: "#ced4da",
        },
        bar: {
          borderRadius: 10,
          backgroundColor: each.color,
        },
      })(LinearProgress);

      return (
        <div key={each.skill} className="eachSkill animatedSection animated">
          <p>
            {each.skill}
            <span style={{ color: each.color }}>
              &nbsp;{`(${each.value}%)`}
            </span>
          </p>
          <BorderLinearProgress variant="determinate" value={each.value} />
        </div>
      );
    });
  };

  return (
    <div id="skills" className="skillsWrapper">
      <h3 className="skills-title animatedSection animated">Skills</h3>
      <div className="skillsProgress">{eachSkill()}</div>
    </div>
  );
};

export default Skills;
