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
        <DigitalClock />
        <div className='whiteBackground'>
          <Selections />
          <MyAvatar />
        </div>
      </div>

      <div className='resumeWrapper'>
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>

    </div>
  );
}

export default App;
