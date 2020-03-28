import React, { useState, useEffect } from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Gmail } from 'mdi-material-ui';

const Tags = props => {

  useEffect(() => {
    const linkedInIcon = document.getElementById("linkedin-icon");
    const githubIcon = document.getElementById("github-icon");
    const facebookIcon = document.getElementById("facebook-icon");
    const gmailIcon = document.getElementById("gmail-icon");
   const iconElements = [linkedInIcon, githubIcon, facebookIcon, gmailIcon];

   iconElements.forEach(icon => {
     icon.addEventListener('mouseover', e => e.target.style.color = '#268FA5', false );
     icon.addEventListener('mouseout', e => e.target.style.color = '', false);
   })
  },[]);

  const Icon = (Components, className) => {
    return (
      <Components
        className={className}
      />
    )
  }


  return (
    <div className={'tags ' + props.className}>
      <a id='linkedin-icon' href='https://www.linkedin.com/in/keithli93/' target='_blank' rel='noreferrer noopener'>
        {Icon(LinkedInIcon, 'eachTag')}
      </a>
      <a id='github-icon' href='https://github.com/hereiskeith' target='_blank' rel='noreferrer noopener'>
        {Icon(GitHubIcon, 'eachTag eachTag-github')}
      </a>
      <a id='facebook-icon' href='https://www.facebook.com/keithli1993' target='_blank' rel='noreferrer noopener'>
        {Icon(FacebookIcon, 'eachTag')}
      </a>
      <a id='gmail-icon' href='mailto:keithli9395@gmail.com?Subject=Hey Keith!'>
        {Icon(Gmail, 'eachTag eachTag-gmail')}
      </a>
    </div>


  )
};

export default Tags;