import React from 'react';
import PropTypes from 'prop-types';
import CommitmentItem from '@components/CommitmentItem';
import ScrollToPrevious from '@components/ScrollToPrevious';
import commitmentItems from './commitment-items';

import './style.scss';

const CommitmentPage = (props, context) => {
  const { theme: { bgPrimary, colorAlternate, textAlternate, colorPrimary } } = context;

  return (
    
      <div className="commitment-page" style={{ backgroundColor: bgPrimary }}>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary}}>Commitments</h1>
        <div className="commitment-wrapper">
          <style jsx="true">
            {`
              .commitment-item {
                background-color: ${colorPrimary};
                color: ${textAlternate};
              }
              .commitment-item a {
                color: ${textAlternate};
              }
              .commitment-item__links a:hover {
                border-bottom: 2px solid ${colorAlternate};
              }
            `}
          </style>
          {/* <CommitmentItem /> */}
          {commitmentItems.map((item, i) => (
            <CommitmentItem render={item.render} key={i} />
          ))}
        </div>
      </div>
      <ScrollToPrevious pageSelector=".portfolio-page" />
    </div>
  );
};

CommitmentPage.contextTypes = {
  theme: PropTypes.any
};

export default CommitmentPage;
