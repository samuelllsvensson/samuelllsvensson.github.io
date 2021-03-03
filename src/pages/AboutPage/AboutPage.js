import ScrollToNext from "@components/ScrollToNext";
import PropTypes from "prop-types";
import React from "react";
import signature from "./signatur.png";
import "./style.scss";

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary },
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
              I’m a 25 year old student with an interest in web development and
              learning new things. This website was made to highlight both
              personal and academical projects, please take a look!
            </p>
            <p>
              I’m currently working towards my{" "}
              <a
                href="https://liu.se/utbildning/program/6cmen"
                target="_blank"
                rel="noopener noreferrer"
              >
                Master of Science (M.Sc.) degree from Linköpings University in
                Media Technology
              </a>{" "}
              at campus Norrköping. It’s focused on computer graphics, AI, UX,
              AR/VR and visualization in addition to the standard engineering
              courses. I’m currently in my final year where I'm focusing on my
              Master's thesis at Maxar Technologies.
            </p>
            <p>
              I’ve always had an interest in technology in general. During high
              school I realized it's possible to combine creativity with
              technology using programming. There’s something valuable in being
              creative enough to be able to create something that intrigues
              people and might even inspire younger students in a certain
              technology. The complete freedom that entails with being a
              programmer in an area that you enjoy is very satisfying. From the
              beginning I stuck with web programming since I always enjoyed
              being able to see what I'm creating instantly and apply different
              designs and frameworks. Since starting university, I've developed
              a variety of small projects, sometimes in groups, sometimes alone.
              I've been learning fast but occasionally failing. Things are
              moving very quickly and I'm getting closer to my graduation. I'm
              currently doing my Master's thesis at{" "}
              <a
                href="https://www.vricon.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Maxar Technologies
              </a>
              , an American space technology company which recently acquired
              Vricon Systems; a geospatial-intelligence data and software
              company, where me and my friend will be evaluating different
              monocular Visual Simultaneous Localization and Mapping (V-SLAM)
              methods for usage with UAV imagery. The aim of the thesis is to
              see how the already existing reconstructed 3D terrain (which uses
              satellite imagery) can be improved with the help of commercial
              drones.
            </p>
            <p>
              {" "}
              During my 4.5 years at Linköpings University I’ve had the pleasure
              of getting to know several languages and frameworks. You can get a
              more in-depth look of what I've created in the ‘Portfolio’ page
              further down. Take a look!
            </p>

            <p></p>

            <p className="regards">Best regards,</p>
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
  theme: PropTypes.any,
};

export default AboutPage;
