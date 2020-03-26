import React, { useState } from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Gmail } from 'mdi-material-ui';

const Tags = props => {

  const Icon = (Components, className) => {
    const [focus, setFocus] = useState(false);

    const handleClick = () => setFocus(!focus);

    return (
      <Components
        className={className}
        style={focus ? {color: '#268FA5'} : {}}
        onClick={handleClick}
      />
    )
  }


  return (
    <div className={'tags ' + props.className}>
      <a href='' target='_blank'>
        {Icon(LinkedInIcon, 'eachTag')}
      </a>
      <a href='https://github.com/hereiskeith' target='_blank'>
        {Icon(GitHubIcon, 'eachTag eachTag-github')}
      </a>
      <a href='https://www.facebook.com/keithli1993' target='_blank'>
        {Icon(FacebookIcon, 'eachTag')}
      </a>
      <a href='mailto:keithli9395@gmail.com?Subject=Hey Keith!'>
        {Icon(Gmail, 'eachTag eachTag-gmail')}
      </a>
    </div>


  )
};

export default Tags;