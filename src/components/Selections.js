import React, {useEffect, useState} from 'react';

const Selections = props => {
  const [focus, setFocus] = useState('#about');
  const { windowScrollY } = props;
  // const [windowScrollY, setWindowScrollY] = useState(0);

  const handleClick = (e) => {
    setFocus(e.target.id);
  };

  useEffect(() => {
    //
    // const recordScrollY = () => setWindowScrollY(window.scrollY);
    //
    // window.addEventListener('scroll', recordScrollY, false);

    const about = document.getElementById("about").offsetTop;
    const skills = document.getElementById("skills").offsetTop;
    const experience = document.getElementById("experience").offsetTop;
    const projects = document.getElementById("projects").offsetTop;
    const contact = document.getElementById("contact").offsetTop;
    const contactElTopToViewportTop = document.getElementById("contact").getBoundingClientRect().top;

    if(windowScrollY >= skills && windowScrollY < experience) {
      setFocus('#skills');
    } else if(windowScrollY >= experience && windowScrollY < projects) {
      setFocus('#experience');
    } else if (
      windowScrollY >= projects && (windowScrollY < contact) && (contactElTopToViewportTop >= window.innerHeight)
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
      <a
        id='#contact'
        href='#contact'
        onClick={handleClick}
        className={'eachSelection ' + (focus === '#contact' ? 'eachSelection-clicked' : '')}
      >
        Contact
      </a>
    </div>


  )
};

export default Selections;