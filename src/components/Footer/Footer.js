import React from 'react';
import PropTypes from 'prop-types';

import './style';

const Footer = (props, context) => {
  const { theme: { colorPrimary, textPrimary } } = context;
  return (
    <footer>
      <div className="content-grid">
<<<<<<< HEAD
        <div style={{ color: textPrimary }}>Made by <a href="https://github.com/flexdinesh" target="_blank" rel="noopener noreferrer" style={{ color: colorPrimary }}>Dinesh</a> <span role="img" aria-label="heart">❤️</span></div>
=======
        <div style={{ color: textPrimary }}>Made by <a href="https://github.com/samuelllsvensson" target="_blank" rel="noopener noreferrer" style={{ color: colorPrimary }}>Samuel</a> <span role="img" aria-label="heart">❤️</span>
        <br/>
        Mobile: +46 725444332
        <br/>
        Email: samuel.svensson.95@gmail.com

        </div>

>>>>>>> dad1b4992eae68f9574be283b50be56e64e6d508
      </div>
    </footer>
  );
};

Footer.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default Footer;