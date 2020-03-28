import React, {useEffect, useState} from 'react';

const Selections = props => {
  const [focus, setFocus] = useState('#about');
  const { windowScrollY } = props;

  useEffect(() => {

    const about = document.getElementById("about").offsetTop;
    const skills = document.getElementById("skills").offsetTop;
    const experience = document.getElementById("experience").offsetTop;
    const projects = document.getElementById("projects").offsetTop;
    const contact = document.getElementById("contact").offsetTop;
    const contactElTopToViewportTop = document.getElementById("contact").getBoundingClientRect().top;
    const ceilingWindowScrollY = Math.ceil(windowScrollY);
    if(ceilingWindowScrollY >= skills && ceilingWindowScrollY < experience) {
      // console.log(windowScrollY, skills);
      setFocus('#skills');
    } else if(ceilingWindowScrollY >= experience && ceilingWindowScrollY < projects) {
      setFocus('#experience');
    } else if (
      ceilingWindowScrollY >= projects && (ceilingWindowScrollY < contact) && (contactElTopToViewportTop >= window.innerHeight)
      ) {
      setFocus('#projects');
    } else if(document.getElementById("contact").getBoundingClientRect().top <= window.innerHeight) {
      setFocus('#contact');
    } else {
      setFocus('#about');
    }
  }, [windowScrollY]);

  useEffect(() => {
    const aboutLink = document.getElementById("#about");
    const skillsLink = document.getElementById("#skills");
    const experienceLink = document.getElementById("#experience");
    const projectsLink = document.getElementById("#projects");
    const contactLink = document.getElementById("#contact");
    const selectionElements = [aboutLink, skillsLink, experienceLink, projectsLink, contactLink];

    selectionElements.forEach(selection => {
      selection.addEventListener(
        'mouseover',
      e => e.target.style = 'color: #268FA5; textDecoration: none',
      false );

      selection.addEventListener(
        'mouseout',
      e => e.target.style = '',
      false);
    })
  },[]);

  return (
    <div className='selectionsWrapper' >
      <a
        id='#about'
        href='#about'
        className={'eachSelection ' + (focus === '#about' ? 'eachSelection-clicked' : '')}
      >
        About
      </a>
      <a
        id='#skills'
        href='#skills'
        className={'eachSelection ' + (focus === '#skills' ? 'eachSelection-clicked' : '')}
      >
        Skills
      </a>
      <a
        id='#experience'
        href='#experience'
        className={'eachSelection ' + (focus === '#experience' ? 'eachSelection-clicked' : '')}
      >
        Experience
      </a>
      <a
        id='#projects'
        href='#projects'
        className={'eachSelection ' + (focus === '#projects' ? 'eachSelection-clicked' : '')}
      >
        Projects
      </a>
      <a
        id='#contact'
        href='#contact'
        className={'eachSelection ' + (focus === '#contact' ? 'eachSelection-clicked' : '')}
      >
        Contact
      </a>
    </div>


  )
};

export default Selections;