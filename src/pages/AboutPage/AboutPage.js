import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import signature from './signatur.png';

import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              I’m a 24 year old student with an interest in web development and learning new things. This website was made to highlight both personal and academical projects, please take a look!

            </p>
            <p>
              I’m currently working towards my <a href="https://liu.se/utbildning/program/6cmen" target="_blank" rel="noopener noreferrer">Master of Science (M.Sc.) degree from Linköpings University in Media Technology</a> at campus Norrköping. 
              It’s focused on computer graphics, AI, UX, AR/VR and visualizations in addition to the standard engineering courses.
              I’m currently in my third year and this spring I’m doing a project as part of my bachelor’s degree. Right now my greatest interests are in 3D-computer graphics, image processing and front-end development.
            </p>
            <p>
              I’ve always had an interest in technology in general since I was very young. During high school I realized it's possible to combine creativity with technology if you're programming. 
              There’s something valuable in being creative enough to be able to create something that intrigues people. 
              From the beginning i stuck with web programming since I always enjoyed being able to see what I'm creating instantly and apply different designs. 
              Since starting university I've developed a variety of small projects, sometimes in groups, sometimes alone. 
              I've been learning fast but occasionally failing. This fall I'm taking machine learning, network security programming and procedural rendering courses which I'm very much looking forward to.  </p>

            <p> During my three years so far at Linköpings University I’ve had the pleasure of getting to know several languages and frameworks. 
            Exactly what I learned is described more in-depth for the respective project in the ‘Portfolio’ page further down. Take a look!</p>

            <p> I'm currently searching for internships for the summer 2020 where I can develop professionally. Contact me if you're interested!</p>
            
           
            <p className="regards">
              Best regards,
            </p>
            <div className="signature">
              <img src={signature} alt="" />
            </div>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
