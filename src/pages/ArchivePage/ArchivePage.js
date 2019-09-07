import React from 'react';
import PropTypes from 'prop-types';
import ArchiveItem from '@components/ArchiveItem';
import archiveItems from './archive-items';
import ScrollToNext from '@components/ScrollToNext';

import './style.scss';

const ArchivePage = (props, context) => {
  const {
    theme: { colorPrimary, colorAlternate, textAlternate, bgPrimary }
  } = context;

  
  return (
    <div className="archive-page" style={{ backgroundColor: bgPrimary }}>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>Archive</h1>
        <h5 style={{ color: colorPrimary, textAlign: 'center' }}>Here you can find some older projects.</h5>
        <div className="archive-wrapper">
          <style jsx="true">
            {`
              .archive-item {
                background-color: ${colorPrimary};
                color: ${textAlternate};
              }
              .archive-item a {
                color: ${textAlternate};
              }
              .archive-item__links a:hover {
                border-bottom: 2px solid ${colorAlternate};
              }
            `}
          </style>
          {/* Render each <ArchiveItem /> */}
          {archiveItems.map((item, i) => (
            <ArchiveItem render={item.render} key={i} />
          ))}
        </div>
        <ScrollToNext pageSelector=".commitment-page" />
      </div>
    </div>
  );
};

ArchivePage.contextTypes = {
  theme: PropTypes.any
};

export default ArchivePage;
