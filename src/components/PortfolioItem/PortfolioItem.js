import React from 'react';
import PropTypes from 'prop-types';
import './style';

const PortfolioItem = (props, context) => {
  const { theme: { colorPrimary, textAlternate } } = context;

  if (props.render) return props.render;
  else
    return (
      <div
        className="portfolio-item"
        style={{ backgroundColor: colorPrimary, color: textAlternate }}
      >
        <div className="portfolio-item__title"></div>

        <div className="portfolio-item__desc">

        </div>
        <div className="portfolio-item__icon">
        </div>
        <div className="portfolio-item__links">

        </div>
      </div>
    );
};

PortfolioItem.contextTypes = {
  theme: PropTypes.any
};

export default PortfolioItem;
