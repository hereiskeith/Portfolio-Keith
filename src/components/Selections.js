import React, { useState } from 'react';

const Selections = props => {
  const [focus, setFocus] = useState('');

  const handleClick = (e) => {
    setFocus(e.target.id);
  };

  return (
    <div className='selectionsWrapper' >
      <a
        id='#about'
        href='#about'
        onClick={handleClick}
        className={'eachSelection ' + (focus === '#about' ? 'eachSelection-clicked' : '')}
      >
        About
      </a>
      <a
        id='#skills'
        href='#skills'
        onClick={handleClick}
        className={'eachSelection ' + (focus === '#skills' ? 'eachSelection-clicked' : '')}
      >
        Skills
      </a>
      <a
        id='#experience'
        href='#experience'
        onClick={handleClick}
        className={'eachSelection ' + (focus === '#experience' ? 'eachSelection-clicked' : '')}
      >
        Experience
      </a>
      <a
        id='#projects'
        href='#projects'
        onClick={handleClick}
        className={'eachSelection ' + (focus === '#projects' ? 'eachSelection-clicked' : '')}
      >
        Projects
      </a>
    </div>


  )
};

export default Selections;