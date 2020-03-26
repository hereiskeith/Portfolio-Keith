import React from 'react';
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
  return (
    <div className='portfolioWrapper'>

      <div className='informationWrapper'>
        <Profile />
        <Tags className='tabletNotShown'/>
        <div className='whiteBackground'>
          <Selections />
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
        <footer className='footer'>&copy;Thanks for reading and have a nice day!</footer>
      </div>

    </div>
  );
}

export default App;
