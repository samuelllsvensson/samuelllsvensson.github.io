import React, { useState } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';

import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';

import NavMenu from './NavMenu/NavMenu';
import OverviewContainer from './Overview/OverviewContainer';
import ReportContainer from './Reports/ReportContainer';
import { darkTheme, lightTheme } from '../constants/themes';
import { BASE_COLORS } from '../constants/colors';

const useStyles = makeStyles({
  appRoot: {
    display: 'flex',
  },
  mainRoot: {
    display: 'flex',
    justifyContent: 'center',
    flex: '6',
  },
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: `${BASE_COLORS.slateGray}30`,
      outline: `3px solid ${BASE_COLORS.slateGray}`,
    },
  },
});

const App = () => {
  const classes = useStyles();
  // We keep the theme in app state
  const [theme, setTheme] = useState({
    palette: darkTheme,
  });
  // we change the palette type of the theme in state
  const toggleDarkTheme = () => {
    const newPaletteType = theme.palette.type === 'light' ? 'dark' : 'light';
    if (newPaletteType === 'light') {
      setTheme({
        palette: lightTheme,
      });
    } else {
      // Set initial theme again
      setTheme({
        palette: darkTheme,
      });
    }
  };
  // we generate a MUI-theme from state's theme object
  const muiTheme = createMuiTheme(theme);
  const responsiveTheme = responsiveFontSizes(muiTheme);
  return (
    <MuiThemeProvider theme={responsiveTheme}>
      <React.Fragment>
        <CssBaseline />
        <Box>
          <div className={classes.appRoot}>
            { /* render accepts the functional component NavMenu and that function won’t get unnecessarily remounted like it would if you would use component prop.
            That function will also receive all the same props that component would receive. */ }
            <Route path="/" render={(props) => <NavMenu {...props} onToggleDark={toggleDarkTheme} />} />
            <div className={classes.mainRoot}>
              <Switch>
                <Route path="/overview/" component={OverviewContainer} />
                <Route
                  path={[
                    '/report/siteId=:siteId/reportId=:reportId/offset=:offset',
                    '/report/siteId=:siteId/reportId=:reportId',
                    '/report/siteId=:siteId',
                  ]}
                  component={ReportContainer}
                />
                <Redirect from="/" to="/overview" />
              </Switch>
            </div>
          </div>
        </Box>
      </React.Fragment>
    </MuiThemeProvider>
  );
};

export default App;
