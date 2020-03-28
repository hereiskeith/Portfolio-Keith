import React, { useEffect, useState } from 'react';
import './sass/styles.scss';
import MyAvatar from "./components/MyAvatar.js";
import Profile from "./components/Profile.js";
import Tags from './components/Tags.js';
import DigitalClock from "./components/DigitalClock";
import Selections from "./components/Selections";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {

  const [windowScrollY, setWindowScrollY] = useState(0);

  useEffect(() => {
    const recordScrollY = () => setWindowScrollY(window.scrollY);
    window.addEventListener('scroll', recordScrollY, false);

    const animatedEls = document.querySelectorAll('.animated');
    animatedEls.forEach((el, index) => {
      if(el.getBoundingClientRect().top < window.innerHeight) {
        // console.log(el.scrollTop, el.getBoundingClientRect().top, window.innerHeight)
        if(index % 2 === 0) {
          el.classList.add('fadeInRight','slow');
        } else {
          el.classList.add('fadeInLeft','slow');
        }
      }
    });

    return () => window.removeEventListener('scroll', recordScrollY, false);
  }, [windowScrollY]);

  return (
    <div className='portfolioWrapper'>

      <div className='informationWrapper'>
        <Profile />
        <Tags className='tabletNotShown'/>
        <div className='whiteBackground'>
          <Selections windowScrollY={windowScrollY} />
          <MyAvatar />
        </div>
        <DigitalClock />
      </div>

      <div className='resumeWrapper'>
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <footer className='footer animated animatedSection'>&copy;Thanks for reading and have a nice day!</footer>
      </div>

    </div>
  );
}

export default App;
