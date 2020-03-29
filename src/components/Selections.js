import React, {useEffect, useState} from 'react';

const Selections = props => {
  const [focus, setFocus] = useState('#about');

  const handleClick = (e) => setFocus(e.target.id);

  useEffect(() => {
    const about = document.getElementById("about").offsetTop;
    const skills = document.getElementById("skills").offsetTop - 1;
    const experience = document.getElementById("experience").offsetTop;
    const projects = document.getElementById("projects").offsetTop;
    const contact = document.getElementById("contact").offsetTop;
    const contactElTopToViewportTop = document.getElementById("contact").getBoundingClientRect().top;

    const aboutLink = document.getElementById("#about");
    const skillsLink = document.getElementById("#skills");
    const experienceLink = document.getElementById("#experience");
    const projectsLink = document.getElementById("#projects");
    const contactLink = document.getElementById("#contact");
    const selectionElements =
      [
        [aboutLink, about],
        [skillsLink, skills],
        [experienceLink, experience],
        [projectsLink, projects],
        [contactLink, contact]
      ];

    selectionElements.forEach(selection => {
      selection[0].addEventListener(
        'mouseover',
      e => e.target.style = 'color: #268FA5; textDecoration: none',
      false );

      selection[0].addEventListener(
        'mouseout',
      e => e.target.style = '',
      false);

      selection[0].addEventListener('click', () => window.scrollTo(0, selection[1]))
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