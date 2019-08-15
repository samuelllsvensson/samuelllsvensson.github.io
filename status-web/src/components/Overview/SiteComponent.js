import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

import { SetColor } from '../Helpers/SetColor';
import { SortBy } from '../Helpers/SortBy';
import { siteStatusOrder } from '../../constants/sortOrders';
import { BASE_COLORS } from '../../constants/colors';
import { results } from '../../constants/results';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    textAlign: 'center',
    width: '60vw',
  },
  siteCount: {
    fontSize: '60pt',
    textAlign: 'center',
    color: 'white',
  },
  siteList: {
    padding: '0',
    listStyleType: 'none',
    display: 'flex',
    flexFlow: 'column wrap',
    alignContent: 'center',
    height: '65vh',
    width: '60vw',
  },
  site: {
    borderRadius: '6px',
    padding: '5px',
    margin: '5px',
    borderLeft: '3px solid black',
    cursor: 'pointer',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    minWidth: '10vw',
    alignItems: 'center',
    '&:hover': {
      boxShadow: '0 0 5px 2px rgba(239, 14, 160, .6)',
    },
  },
  siteTitle: {
    fontSize: '16pt',
    marginRight: '5px',
  },
  siteEnterprise: {
    textAlign: 'center',
  },
  statusCount: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const SiteComponent = (props) => {
  const {
    sites,
    numRows,
    navigateToReportDetails,
  } = props;
  const classes = useStyles();
  let status = 0;
  sites.map((elements) => {
    if (elements.EvaluationDto.Result === results.WARNING) {
      status += 1;
    } if (elements.EvaluationDto.Result === results.ERROR) {
      status += 1;
    }
    return status;
  });
  function SetCountColor(status) {
    // If not all sites are OK, display red
    if (status !== 0) {
      return BASE_COLORS.error;
    }
    return BASE_COLORS.ok;
  }
  return (
    <Paper className={classes.root}>
      <ul className={classes.siteList}>
        {
          sites
            .sort(SortBy(e => e.SiteName))
            .sort(SortBy(e => siteStatusOrder.indexOf(e.EvaluationDto.Result)))
            .map((item, index) => (
              <Paper
                className={classes.site}
                key={index.toString()}
                style={{ borderColor: SetColor(item.EvaluationDto.Result), backgroundColor: `${SetColor(item.EvaluationDto.Result)}30` }}
                onClick={() => {
                  const siteId = item.SiteId;
                  if (siteId) {
                    navigateToReportDetails(siteId);
                  } else {
                    console.log('Error: siteId is undefined.');
                  }
                }}
              >
                <div>
                  <div className={classes.siteTitle}>
                    <Typography variant="h5">{item.SiteName}</Typography>
                  </div>
                  <div className={classes.siteEnterprise}><Typography variant="caption">{item.EnterpriseName}</Typography></div>
                </div>
              </Paper>
            ))
        }
      </ul>
      <Paper
        className={classes.statusCount}
        elevation={0}
      >
        <div
          className={classes.siteCount}
          style={{ fontWeight: 100, color: `${SetCountColor(status)}` }}
        >
          <Typography variant="h1">{status}</Typography>
        </div>
        <div
          className={classes.siteCount}
          style={{ fontWeight: 100 }}
        >
          <Typography variant="h2" color="textPrimary">/</Typography>
        </div>
        <div
          className={classes.siteCount}
          style={{ marginRight: 10 }}
        >
          <Typography variant="h2" color="textPrimary">{numRows}</Typography>
        </div>
      </Paper>
    </Paper>
  );
};
export default SiteComponent;
