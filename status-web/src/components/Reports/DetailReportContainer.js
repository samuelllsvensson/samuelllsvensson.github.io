/* eslint-disable no-else-return */
import React from 'react';

import { makeStyles } from '@material-ui/styles';

import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

import DetailListComponent from './ReportComponents/DetailListComponent';
import CameraListComponent from './ReportComponents/CameraListComponent';
import CowListComponent from './ReportComponents/CowListComponent';
import ModuleListComponent from './ReportComponents/ModuleListComponent';

import { GroupBy } from '../Helpers/GroupBy';

import { BASE_COLORS } from '../../constants/colors';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    margin: '0 1vh 0',
  },
  ids: {
    flex: '0 0 auto',
  },
  statistics: {
    flex: '1',
  },
  other: {
    flex: '1',
  },
  divider: {
    height: '75vh',
    marginLeft: '20px',
    marginRight: '20px',
  },
});
const DetailReportContainer = (props) => {
  const {
    detailReports,
  } = props;
  const classes = useStyles();
  // if detailReports hasn't loaded yet
  if (!detailReports.DetailReportEvaluationDto) {
    return (
      <div className={classes.root}>
        <CircularProgress style={{ color: BASE_COLORS.ok }} />
      </div>
    );
  } else {
    const grouped = GroupBy(detailReports.IndividualDetailEvaluationsDtos, e => e.Category);
    const details = grouped.get('Details');
    const cows = grouped.get('Cows');
    const modules = grouped.get('Modules');
    const cameras = grouped.get('Cameras');
    return (
      <div className={classes.root}>
        <Paper className={classes.ids}>
          <DetailListComponent individualEvaluationDto={details} />
        </Paper>
        <div className={classes.divider} />
        <div className={classes.statistics}>
          <CowListComponent individualEvaluationDto={cows} />
          <ModuleListComponent individualEvaluationDto={modules} />
        </div>
        <div className={classes.divider} />
        <div className={classes.other}>
          <CameraListComponent individualEvaluationDto={cameras} />
        </div>
      </div>
    );
  }
};
export default DetailReportContainer;
