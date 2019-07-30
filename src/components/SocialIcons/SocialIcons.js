import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD

=======
>>>>>>> dad1b4992eae68f9574be283b50be56e64e6d508
import './style.scss';

const SocialIcons = (props, context) => {
  const { theme: { colorPrimary } } = context;
  
  return (
    <div className="social-icons animate-icons">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/samuelllsvensson" style={ { color: colorPrimary } }><i className="fab fa-github"></i></a>       
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/samuel-svensson-876372aa/" style={ { color: colorPrimary } }><i className="fab fa-linkedin"></i></a> 
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/samuel.svensson1" style={ { color: colorPrimary } }><i className="fab fa-facebook"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/samuelllsvensson/" style={ { color: colorPrimary } }><i className="fab fa-instagram"></i></a>         
        <a target="_blank" rel="noopener noreferrer" href="https://vimeo.com/user33091454" style={ { color: colorPrimary } }><i className="fab fa-vimeo"></i></a>     
        <a target="_blank" rel="noopener noreferrer" href="mailto:samuel.svensson.95@gmail.com" style={ { color: colorPrimary } }><i className="fa fa-envelope"></i></a>     
        <a target="_blank" rel="noopener noreferrer" href={"files/CV-2019en.pdf"} type="application/pdf" style={ { color: colorPrimary } }><i className="fas fa-address-card"></i></a>         
      </div>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default SocialIcons;