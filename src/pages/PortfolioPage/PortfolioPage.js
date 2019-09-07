import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PortfolioItem from '@components/PortfolioItem';
import ArchivePage from '../ArchivePage/ArchivePage';

import ScrollToNext from '@components/ScrollToNext';
import portfolioItems from './portfolio-items';

import './style.scss';
const scrollToRef = (ref) => window.scrollTo({
  top: ref.current.offsetTop + 100, 
  behavior: 'smooth' 
});

const PortfolioPage = (props, context) => {
  const {
    theme: { colorPrimary, colorAlternate, textAlternate, bgPrimary }
  } = context;
  
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <Router>
      <div className="portfolio-page" style={{ backgroundColor: bgPrimary }}>
        <div className="content-grid">
          <h1 style={{ color: colorPrimary }}>Portfolio</h1>
          <div className="portfolio-wrapper">
            <style jsx="true">
              {`
                .portfolio-item {
                  background-color: ${colorPrimary};
                  color: ${textAlternate};
                }
                .portfolio-item a {
                  color: ${textAlternate};
                }
                .portfolio-item__links a:hover {
                  border-bottom: 2px solid ${colorAlternate};
                }
              `}
            </style>
            {/* Render each <PortfolioItem /> */}
            {portfolioItems.map((item, i) => (
              <PortfolioItem render={item.render} key={i} />
            ))}
          </div>
          <div className="portfolio-archive" ref={myRef} onClick={executeScroll}>
            <Link to="/portfolio-archive/">
              <h4 style={{ color: colorPrimary }}>Archive</h4>
            </Link>
          </div>
        </div>
        <ScrollToNext pageSelector=".commitment-page" />
        <Route path="/portfolio-archive/" component={ArchivePage} />
      </div>
    </Router>
  );
};

PortfolioPage.contextTypes = {
  theme: PropTypes.any
};

export default PortfolioPage;
