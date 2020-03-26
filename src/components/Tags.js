import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Gmail } from 'mdi-material-ui';

const Tags = props => {
  return (
    <div className={'tags ' + props.className} >
      <LinkedInIcon className='eachTag'/>
      <GitHubIcon className='eachTag eachTag-github'/>
      <FacebookIcon className='eachTag'/>
      <Gmail className='eachTag eachTag-gmail'/>

    </div>


  )
};

export default Tags;