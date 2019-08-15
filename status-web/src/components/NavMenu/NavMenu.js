import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/styles';

import { useTranslation } from 'react-i18next';

import moment from 'moment';
// Import locales data
import 'moment/locale/en-gb';
import 'moment/locale/sv';

import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';

import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import agricamLogo from '../../assets/images/agricamlogga.svg';

import { BASE_COLORS } from '../../constants/colors';
import { autoUpdateTime } from '../../constants/netConfig';

import SiteMinimap from './SiteMinimap';

import {
  fetchSitesIfNeeded,
} from '../../ducks/sites/actions';
import {
  navigateToReportDetails,
} from '../../ducks/detailReports/actions';

const useStyles = makeStyles({
  root: {
    position: 'sticky',
    top: '0',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textDecoration: 'none',
    flex: '1',
  },
  navLink: {
    textDecoration: 'none',
    width: '100%',
    borderRadius: '0',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: `${BASE_COLORS.darkGreen}30`,
    },
  },
  minimapHolder: {
  },
  language: {
    display: 'inline-flex',
    paddingLeft: '15px',
    paddingRight: '15px',
    paddingBottom: '15px',
    textAlign: 'center',
  },
  navFooter: {
    display: 'flex',
    flexDirection: 'column',
  },
  contact: {
    display: 'flex',
    flexdirection: 'column',
    border: `1px solid ${BASE_COLORS.black}21`,
  },
  link: {
    color: BASE_COLORS.darkGreen,
    textDecoration: 'none',
  },
});

// override with inline-styles for menuitem
const styles = {
  menuItem: {
  },
  activeMenuItem: {
    backgroundColor: `${BASE_COLORS.darkGreen}30`,
    borderLeft: `5px solid ${BASE_COLORS.darkGreen}`,
  },
  menuDetailItem: {
    display: 'none',
  },
  activeDetailMenuItem: {
    backgroundColor: `${BASE_COLORS.darkGreen}30`,
    borderLeft: `5px solid ${BASE_COLORS.darkGreen}`,
    display: 'block',
  },
};

const supportPhoneNumber = '+46 768 61 99 08';
const infoMail = 'support@agricam.se';
const infoMailHref = `mailto:${infoMail}`;

const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);

const NavMenu = (props) => {
  const {
    sites,
    chosenSiteId,
    navigateToReportDetails,
    onToggleDark,
    fetchSitesIfNeeded,
    currentPath = window.location.pathname,
  } = props;
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const time = setInterval(() => {
      fetchSitesIfNeeded();
    }, autoUpdateTime);
    return () => clearInterval(time);
  }, [fetchSitesIfNeeded]);

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  const [languages, setLanguages] = React.useState({
    name: 'Svenska',
  });
  function handleLanguage(event) {
    if (event.target.value === 'Svenska') {
      moment.locale('sv');
      changeLanguage('sv');
    } else {
      moment.locale('en-gb');
      changeLanguage('en');
    }
    setLanguages(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  // Theme switcher state
  const [state, setState] = useState({
    checked: false,
  });
  const handleChange = name => event => {
    event.persist();
    setState({
      ...state,
      [name]: event.target.checked,
    });
  };
  return (
    <Paper className={classes.root}>
      <div>
        <Link to="/">
          <img src={agricamLogo} alt="Agricam AB" width="100%" />
        </Link>
        <MenuList style={{ outline: 'none' }}>
          <MenuItem
            dense
            disableGutters
            style={currentPath.includes('overview') ? styles.activeMenuItem : styles.menuItem}
          >
            <Button
              className={classes.navLink}
              fullWidth
              disableRipple
              disableFocusRipple
              to="/overview"
              component={AdapterLink}
            >
              <Typography variant="h5" color="textPrimary">{t('NavLinkOverview')}</Typography>
            </Button>
          </MenuItem>
          <Divider />
          <MenuItem style={currentPath.includes('report') ? styles.activeDetailMenuItem : styles.menuDetailItem}>
            <Button
              disabled
              className={classes.navLink}
            >
              <Typography variant="h5" color="textPrimary">{t('NavLinkReport')}</Typography>
            </Button>
          </MenuItem>
          <Paper className={classes.minimapHolder} style={currentPath.includes('report') ? styles.activeDetailMenuItem : styles.menuDetailItem}>
            <SiteMinimap
              sites={sites}
              chosenSiteId={chosenSiteId}
              navigateToReportDetails={navigateToReportDetails}
              fetchSitesIfNeeded={fetchSitesIfNeeded}
            />
          </Paper>
        </MenuList>
      </div>
      <div>
        <div className={classes.navFooter}>
          <Divider />
          <FormControlLabel
            control={(
              <Switch
                color="primary"
                checked={state.checked}
                onChange={handleChange('checked')}
                onClick={() => onToggleDark()}
                value="checked"
              />
            )}
            label={<Typography variant="subtitle1">{t('changeTheme')}</Typography>}
            labelPlacement="top"
          />
          <Divider />
          <Typography variant="subtitle1" align="center">{t('support')}</Typography>
          <Typography variant="caption" align="center">{supportPhoneNumber}</Typography>
          <Divider />
          <Typography variant="subtitle1" align="center">{t('email')}</Typography>
          <Typography variant="caption" align="center"><a href={infoMailHref} className={classes.link}>{infoMail}</a></Typography>
          <Divider />
          <div className={classes.language}>
            <FormControl fullWidth>
              <FormHelperText>{t('changeLanguage')}</FormHelperText>
              <Select
                value={languages.name}
                onChange={handleLanguage}
                name="name"
                renderValue={value => `${value}`}
                input={<Input name="name" />}
                IconComponent={KeyboardArrowUp}
                MenuProps={{
                  getContentAnchorEl: null,
                  anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right',
                  },
                  transformOrigin: {
                    vertical: 'center',
                    horizontal: 'right',
                  },
                }}
              >
                <MenuItem value="Svenska"><Typography variant="caption" align="center">Svenska</Typography></MenuItem>
                <MenuItem value="English"><Typography variant="caption" align="center">English</Typography></MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </Paper>
  );
};
const mapStateToProps = state => ({
  chosenSiteId: state.detailReportState.detailReports.SiteId,
  statusesToSkip: state.detailReportState.statusesToSkip,
  sites: state.sitesState.sites,
  getInactiveSites: state.sitesState.getInactiveSites,
});
export default connect(mapStateToProps, {
  fetchSitesIfNeeded,
  navigateToReportDetails,
})(NavMenu);
