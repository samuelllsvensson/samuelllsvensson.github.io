import React from 'react';
import PropTypes from 'prop-types';
import './style';

const CommitmentItem = (props, context) => {
  const { theme: { colorPrimary, textAlternate } } = context;

  if (props.render) return props.render;
  else
    return (
      <div
        className="commitment-item"
        style={{ backgroundColor: colorPrimary, color: textAlternate }}
      >
        <div className="commitment-item__title">Badass</div>

        <div className="commitment-item__desc">
          I do badass things and kickass everyday! I do badass things and
          kickass everyday! I do badass things and kickass everyday!
        </div>
        <div className="commitment-item__icon">
          <i className="fab fa-js" />
          <i className="fab fa-react" />
          <i className="fab fa-html5" />
        </div>
        <div className="commitment-item__links">
          <a src="#">Code</a>
          <a src="#">Blog</a>
        </div>
      </div>
    );
};

CommitmentItem.contextTypes = {
  theme: PropTypes.any
};

export default CommitmentItem;
