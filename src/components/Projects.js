import React from 'react';
import BizMSM from '../static/bizmsm.png';
import Dashboard from '../static/dashboard.png';
import { bizmsmPics } from './bizmsmPics';
import { dashboardPics } from "./dashboardPics";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const renderBizmsmPics = () => {
  return bizmsmPics.map((each, index) => {
    return (
      <a
        key={`bizmsm-${index}`}
        className='bizmsmPicWrapper'
        target='_blank'
        href='https://github.com/hereiskeith/BizMSM-ecommerce-App'
      >
        <img key={`biz-${index}`} alt={`biz-${index}`} className='bizmsmPic' src={each} />
      </a>
    )
  })
};

const renderDashboardPics = () => {
  return dashboardPics.map((each, index) => {
    return (
      <a
        key={`dashboard-${index}`}
        className='dashboardPicWrapper'
        target='_blank'
        href='https://github.com/hereiskeith/React-dashboard'
      >
        <img alt={`dashboard-${index}`} className='dashboardPic' src={each} />
      </a>
    )
  })
};


const Projects = props => {

  let bizmsmSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
      ]
  };

  let dashboardSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div id='projects' className='projectsWrapper'>
      <h3 className='projectsTitle'>
        Projects
      </h3>

      <div className='eachProject'>

        <div className='logoWrapper'>
          <img alt='bizmsm-logo' className='projectLogo' src={BizMSM} />
        </div>

        <div className='projectDetailWrapper'>
          <h4 className='projectTitle'>BizMSM</h4>

          <p className='projectDetail'>
            An awesome e-commerce app grouping local merchants and customers
          </p>

          <Slider {...bizmsmSettings}>
            {renderBizmsmPics()}
          </Slider>

        </div>

      </div>

      <div className='eachProject'>

        <div className='logoWrapper'>
          <img alt='dashboard-logo' className='projectLogo' src={Dashboard} />
        </div>

        <div className='projectDetailWrapper'>
          <h4 className='projectTitle'>React Dashboard</h4>

          <p className='projectDetail'>
            This awesome react dashboard is showing Bitcom trend with Highcharts charts
            <br />
          </p>
          <Slider {...dashboardSettings}>
              {renderDashboardPics()}
          </Slider>

        </div>

      </div>
    </div>


  )
};

export default Projects;