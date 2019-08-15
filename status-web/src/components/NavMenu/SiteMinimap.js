import React, { useEffect } from 'react';

import { makeStyles } from '@material-ui/styles';

import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

import { SortBy } from '../Helpers/SortBy';
import { SetColor } from '../Helpers/SetColor';

import { siteStatusOrder } from '../../constants/sortOrders';
import { BASE_COLORS } from '../../constants/colors';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    height: '39vh',
    overflow: 'auto',
  },
  siteList: {
    marginTop: '1vh',
    marginBottom: '1vh',
    padding: '0',
    listStyleType: 'none',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    flex: '1',
    overflow: 'auto',
  },
  site: {
    padding: '5px',
    margin: '5px',
    minWidth: '10vw',
    listStyleType: 'none',
    borderLeft: '3px solid black',
    cursor: 'pointer',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    '&:hover': {
      boxShadow: '0 0 5px 2px rgba(239, 14, 160, .6)',
    },
  },
  siteTitle: {
    fontSize: '8pt',
  },
});
const SiteMinimap = (props) => {
  const {
    sites,
    navigateToReportDetails,
    chosenSiteId,
    fetchSitesIfNeeded,
  } = props;
  useEffect(() => {
    fetchSitesIfNeeded();
  }, [fetchSitesIfNeeded]);
  const classes = useStyles();
  function SetColorSelected(item) {
    if (parseInt(item.SiteId, 10) !== parseInt(chosenSiteId, 10)) {
      return SetColor(item.EvaluationDto.Result);
    }
    return BASE_COLORS.pink;
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
                style={{ borderColor: SetColorSelected(item), backgroundColor: `${SetColorSelected(item)}30` }}
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
                  <div className={classes.siteTitle}><Typography variant="caption">{item.SiteName}</Typography></div>
                </div>
              </Paper>
            ))
        }
      </ul>
    </Paper>
  );
};
export default SiteMinimap;
