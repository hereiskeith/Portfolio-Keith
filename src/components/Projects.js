import React from 'react';
import BizMSM from '../static/bizmsm.png';
import Dashboard from '../static/dashboard.png';
import { bizmsmPics } from './bizmsmPics';
import { dashboardPics } from "./dashboardPics";

const renderBizmsmPics = () => {
  return bizmsmPics.map(each => {
    return (
      <img className='bizmsmPic' src={each} />
    )
  })
};

const renderDashboardPics = () => {
  return dashboardPics.map(each => {
    return (
      <img className='dashboardPic' src={each} />
    )
  })
};


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

          <div className='galleryWrapper'>
            <div className='bizmsmPhotoGallery'>
              {renderBizmsmPics()}
            </div>
          </div>

        </div>

      </div>

      <div className='eachProject'>

        <div className='logoWrapper'>
          <img className='projectLogo' src={Dashboard} />
        </div>

        <div className='projectDetailWrapper'>
          <h4 className='projectTitle'>React Dashboard</h4>

          <p className='projectDetail'>
            This awesome react dashboard is showing Bitcom trend with Highcharts charts
            <br />
            (https://github.com/hereiskeith/React-dashboard)
          </p>

          <div className='galleryWrapper'>
            <div className='dashboardPhotoGallery'>
              {renderDashboardPics()}
            </div>
          </div>

        </div>

      </div>
    </div>


  )
};

export default Projects;