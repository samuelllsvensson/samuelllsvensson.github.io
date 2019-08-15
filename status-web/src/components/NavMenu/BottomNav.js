import React from 'react';

import { makeStyles } from '@material-ui/styles';

import { useTranslation } from 'react-i18next';

import Badge from '@material-ui/core/Badge';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import Home from '@material-ui/icons/Home';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import Replay10 from '@material-ui/icons/Replay10';
import Forward10 from '@material-ui/icons/Forward10';

const useStyles = makeStyles({
  bottomNav: {
    backgroundColor: 'inherit',
  },
});
const BottomNav = (props) => {
  const {
    siteId,
    reportId,
    hasNewReport,
    navigateToReportDetails,
  } = props;
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <BottomNavigation
      className={classes.bottomNav}
      showLabels
    >
      <BottomNavigationAction
        label={t('-10')}
        color="primary"
        icon={<Replay10 />}
        onClick={() => {
          navigateToReportDetails(siteId, reportId, -10);
        }}
      />
      <BottomNavigationAction
        label={t('prev')}
        color="primary"
        icon={<ArrowBackIos />}
        onClick={() => {
          navigateToReportDetails(siteId, reportId, -1);
        }}
      />
      <BottomNavigationAction
        label={t('next')}
        icon={<ArrowForwardIos />}
        color="primary"
        onClick={() => {
          navigateToReportDetails(siteId, reportId, 1);
        }}
      />
      <BottomNavigationAction
        label={t('+10')}
        icon={<Forward10 />}
        color="primary"
        onClick={() => {
          navigateToReportDetails(siteId, reportId, 10);
        }}
      />
      <BottomNavigationAction
        icon={<Badge color="primary" variant="dot" invisible={!hasNewReport}><Home /></Badge>}
        label={t('home')}
        color="primary"
        onClick={() => {
          navigateToReportDetails(siteId);
        }}
      />
    </BottomNavigation>
  );
};
export default BottomNav;
