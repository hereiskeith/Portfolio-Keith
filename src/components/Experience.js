import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Experience = props => {
  return (
    <div id='experience' className='experienceWrapper'>
      <h3 className='experienceTitle'>Experience</h3>
      <div className='eachExperience'>
        <h6 className='jobDuration'>May 2019 – Present</h6>
        <h4 className='jobTitle'>Front-end Developer / Research Assistant</h4>
        <h5 className='jobLocation'><LocationOnIcon className='locationIcon'/>University of Ottawa</h5>
        <p className='jobDetail'>I am a Jr. Front-end Developer with 1+ years of experience.
          I am passionate about what I do and always give 100%. When I undertake
          a project or task, I don’t just complete it, I go the extra mile
          and make it better than requested
        </p>
      </div>
    </div>


  )
};

export default Experience;