import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles, lighten } from "@material-ui/core";

const Skills = props => {
  const skills =
    [
      {skill: 'JavaScript', value: 90, color: '#20c997' },
      {skill: 'HTML/CSS', value: 80, color: '#dc3545' },
      {skill: 'Git/Gitub', value: 70, color: '#ffc107' },
      {skill: 'React', value: 90, color: '#20c997' },
      {skill: 'MySQL/MongoDB', value: 50, color: '#007bff' },
      {skill: 'Node.js/express', value: 70, color: '#6610f2' },
      {skill: 'material-ui', value: 80, color: '#dc3545' },
    ];

  const eachSkill = () => {

    return skills.map(each => {
        const BorderLinearProgress = withStyles({
          root: {
            height: 8,
            borderRadius: 10,
            backgroundColor: '#ced4da',
          },
          bar: {
            borderRadius: 10,
            backgroundColor: each.color,
          },
        })(LinearProgress);

        return (
          <div className='eachSkill'>
            <p>
              {each.skill}
              <span style={{color: each.color}}>&nbsp;{`(${each.value}%)`}</span>
            </p>
            <BorderLinearProgress
              variant="determinate"
              value={each.value} />

          </div>
        )
      })
  };

  return (
    <div id='skills' className='skillsWrapper'>
      <h3 className='skills-title'>Skills</h3>
      <div className='skillsProgress'>
        {eachSkill()}
      </div>
    </div>


  )
};

export default Skills;