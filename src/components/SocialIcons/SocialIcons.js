import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const SocialIcons = (props, context) => {
  const {
    theme: { colorPrimary },
  } = context;

  return (
    <div className="social-icons animate-icons">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/samuelllsvensson"
        style={{ color: colorPrimary }}
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/samuel-svensson-876372aa/"
        style={{ color: colorPrimary }}
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/samuel.svensson1"
        style={{ color: colorPrimary }}
      >
        <i className="fab fa-facebook"></i>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:samuel.svensson.95@gmail.com"
        style={{ color: colorPrimary }}
      >
        <i className="fa fa-envelope"></i>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={"files/CV-2020sv.pdf"}
        type="application/pdf"
        style={{ color: colorPrimary }}
      >
        <i className="fas fa-address-card"></i>
      </a>
    </div>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any,
};

export default SocialIcons;
