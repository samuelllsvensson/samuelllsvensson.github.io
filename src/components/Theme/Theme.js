import React, { Component } from 'react';
import PropTypes from 'prop-types';

const theme = [
  {
    name: 'orange',
    firstTime: true,
    colorPrimary: '#e17421',
    colorAlternate: '#333333',
    colorHighlight: '#f9e4d5',
    textPrimary: '#ffffff',
    navAlpha: 'rgba(142, 142, 142, 0.3)'
  }
];
const getTheme = () => {
  return theme.map((theme) => {
    return {
      name: theme.name,
      firstTime: theme.firstTime,
      colorPrimary: theme.colorPrimary,
      colorAlternate: theme.colorAlternate,
      colorHighlight: theme.colorHighlight,
      bgPrimary: theme.colorAlternate,
      bgAlternate: theme.colorPrimary,
      bgLanding: theme.colorPrimary,
      textPrimary: theme.textPrimary,
      textAlternate: theme.colorAlternate,
      textLanding: theme.colorPrimary,
      parallaxStars: theme.colorPrimary,
      navAlpha: theme.navAlpha
    };
  });
};
class Theme extends Component {

  constructor(props) {
    super(props);
    const allThemes = getTheme();
    const firstTimeThemes = allThemes.filter(theme => theme.firstTime === true);
    this.state = {
      theme: firstTimeThemes[Math.floor((Math.random() * (firstTimeThemes.length)))]
    }
  }
  
  getChildContext(){
    return {
      theme: this.state.theme,
    };
  }

  render() {
    const { children } = this.props;
    const theme = this.state.theme;

    return (
      <div className="theme">
        <style jsx="true">
        {`
          body {
            background-color: ${theme.bgPrimary};
            body, h1, h2, h3, h4, h5, h6, p, ol, ul {
              color: ${theme.textPrimary}
            }
          }
        `}
        </style>
        { children }
      </div>
    );
  }
}


Theme.childContextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
}

export default Theme;