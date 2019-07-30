import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from '@components/SocialIcons';
import Nav from '@components/Nav';
import ScrollToNext from '@components/ScrollToNext';
import image from './moi.jpg';
import './style.scss';

const LandingPage = (props, context) => {
  const { theme: { bgPrimary, colorPrimary } } = context;

  return (
    <div style={{ backgroundColor: bgPrimary }} className="landing-page">
      <Nav />
      <main style={{ color: colorPrimary }}>
        
        <div className="intro-wrapper">
          <div className="intro-name">Välkommen!</div>
          <div className="tagline">
          <h2> <p> Samuel Svensson  </p></h2>
            Student at Linköpings university
            <h4><p>  Master of Science in Media Technology and Engineering </p> </h4>
          </div>
          <div className="image">
            <img src={image} alt="" />
          </div>
          <SocialIcons />
        </div>
      </main>
      <ScrollToNext pageSelector=".about-page" />
    </div>
  );
};

LandingPage.contextTypes = {
  theme: PropTypes.any
};

export default LandingPage;
