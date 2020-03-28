import React from 'react';
import KeithResume from '../static/Shanghao (Keith) Li-resume.docx';

const Contact = props => {
  return (
    <div id='contact' className='contactWrapper'>
      <h3 className='contact-title animatedSection animated'>Contact</h3>
      <p className='animatedSection animated'>
        If you are interested on my aptitudes or having amazing projects on hand, please consider me for your team!
      </p>

      <div className='btnWrapper animatedSection animated'>
        <div className='contactMeBtn'>
          <a
            className='contactMeALink'
            target='_blank'
            rel='noreferrer noopener'
            href='mailto:keithli9395@gmail.com?Subject=Hey Keith!'
          >
            <img
              alt='coffee'
              className='contactMeIcon'
              src="https://img.icons8.com/color/48/000000/coffee-to-go.png"
            />
            &nbsp;Contact Me
          </a>
        </div>
        <div className='myResumeBtn'>
          <a
            className='myResumeALink'
            href={KeithResume}
            download='Shanghao-Keith-Li-resume.docx'
          >
            <img
              alt='resume'
              className='myResumeIcon'
              src="https://img.icons8.com/color/48/000000/overview-pages-2.png"
            />
            &nbsp;My Resume
          </a>
        </div>
      </div>

    </div>

  )
};

export default Contact;