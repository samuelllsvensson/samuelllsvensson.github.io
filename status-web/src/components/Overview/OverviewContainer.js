import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/styles';

import { useTranslation } from 'react-i18next';

import LinearProgress from '@material-ui/core/LinearProgress';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import { Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';

import DeveloperBoard from '@material-ui/icons/DeveloperBoard';
import Refresh from '@material-ui/icons/Refresh';
import DomainDisabled from '@material-ui/icons/DomainDisabled';

import SiteComponent from './SiteComponent';

import { BASE_COLORS } from '../../constants/colors';

import {
  fetchSitesIfNeeded,
  toggleCheckbox,
} from '../../ducks/sites/actions';
import {
  navigateToReportDetails,
} from '../../ducks/detailReports/actions';

const useStyles = makeStyles({
  root: {
    width: '60vw',
    display: 'flex',
    flexFlow: 'column wrap',
  },
  header: {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignContent: 'space-between',
    marginTop: '2vw',
    padding: '1vh',
    height: '12vh',
    width: '60vw',
  },
  flex: {
    display: 'flex',
  },
  flexAlign: {
    display: 'flex',
    alignItems: 'center',
  },
  fab: {
    boxShadow: '0 0px 5px 2px rgba(0, 200, 100, .3)',
    marginBottom: '1vh',
    color: BASE_COLORS.white,
    '&:hover': {
      backgroundColor: BASE_COLORS.darkGreenHighlight,
    },
  },
});

const OverviewContainer = (props) => {
  const {
    sites,
    isFetchingSites,
    fetchSitesIfNeeded,
    navigateToReportDetails,
    toggleCheckbox,
    getInactiveSites,
  } = props;
  const classes = useStyles();
  const numRows = sites.length;
  const { t } = useTranslation();
  return (
    <div>
      <Paper className={classes.header}>
        <div className={classes.flexAlign}>
          <DeveloperBoard color="primary" style={{ fontSize: '3vw', marginRight: 15 }} />
          <Typography variant="h5" color="primary">{t('Header')}</Typography>
        </div>
        <div className={classes.flexAlign}>
          <div className={classes.flex} style={{ display: 'flex' }}>
            <Tooltip title={t('fetchInactive')}>
              <span>
                <FormControlLabel
                  control={(
                    <Checkbox
                      checked={getInactiveSites}
                      color="primary"
                      disabled={isFetchingSites}
                      onChange={() => toggleCheckbox(getInactiveSites)}
                      icon={<DomainDisabled style={{ fill: 'secondary' }} />}
                      checkedIcon={getInactiveSites ? <DomainDisabled style={{ fill: 'primary' }} /> : <DomainDisabled style={{ fill: 'secondary' }} />}
                    />
                  )}
                  style={{ margin: 0 }}
                />
              </span>
            </Tooltip>
            <Tooltip title={t('fetchActive')}>
              <span>
                <Fab
                  className={classes.fab}
                  color="primary"
                  onClick={() => fetchSitesIfNeeded()}
                  disabled={isFetchingSites}
                  size="small"
                >
                  {<Refresh />}
                </Fab>
              </span>
            </Tooltip>
          </div>
        </div>
      </Paper>
      {isFetchingSites ? (
        <LinearProgress mode="indeterminate" color="primary" />
      ) : (
        <LinearProgress
          mode="indeterminate"
          style={{ visibility: 'hidden' }}
        />
      )}
      <div className={classes.root}>
        <SiteComponent
          sites={sites}
          numRows={numRows}
          navigateToReportDetails={navigateToReportDetails}
        />
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  sites: state.sitesState.sites,
  isFetchingSites: state.sitesState.isFetchingSites,
  getInactiveSites: state.sitesState.getInactiveSites,
});
export default connect(mapStateToProps, {
  fetchSitesIfNeeded,
  navigateToReportDetails,
  toggleCheckbox,
})(OverviewContainer);
