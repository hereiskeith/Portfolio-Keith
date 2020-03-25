import React from 'react';
import BizMSM from '../static/bizmsm.png';

const Projects = props => {
  return (
    <div id='projects' className='projectsWrapper'>
      <h3 className='projectsTitle'>
        Projects
      </h3>
      <div className='eachProject'>

        <div className='logoWrapper'>
          <img className='projectLogo' src={BizMSM} />
        </div>

        <div className='projectDetailWrapper'>
          <h4 className='projectTitle'>BizMSM</h4>
          <p className='projectDetail'>
            An awesome e-commerce app grouping local merchants and customers
          </p>
          <div className='projectPhotoGallery'>

          </div>
        </div>
      </div>
    </div>


  )
};

export default Projects;