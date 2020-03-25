import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';

const Tags = props => {
  return (
    <div className='tags'>
      <LinkedInIcon className='eachTag'/>
      <GitHubIcon className='eachTag-github'/>
      <FacebookIcon className='eachTag'/>

    </div>


  )
};

export default Tags;