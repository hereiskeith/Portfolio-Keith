import React, { Fragment } from 'react';
import Keith from '../static/avatar.jpg';

const MyAvatar = props => {
  return (
    <div className='avatarWrapper'>
      <img className='avatar' src={Keith} />
    </div>


  )
};

export default MyAvatar;