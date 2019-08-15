/* eslint-disable no-else-return */

import React from 'react';

import moment from 'moment';
// Import locales data
import 'moment/locale/en-gb';
import 'moment/locale/sv';

import { makeStyles } from '@material-ui/styles';

import { useTranslation } from 'react-i18next';

import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Refresh from '@material-ui/icons/Refresh';

import StaticComponent from './ReportComponents/StaticComponent';

import { GroupBy } from '../Helpers/GroupBy';
import { SetColor } from '../Helpers/SetColor';
import CheckIfTimestamp from '../Helpers/CheckIfTimestamp';

import { BASE_COLORS } from '../../constants/colors';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    flex: '1',
    flexFlow: 'row wrap',
    textAlign: 'center',
    fontSize: '10pt',
    padding: '0 5px 5px 5px',
    margin: '0 0 5px 0',
  },
  site: {
    margin: '0 5px 0 5px',
    padding: '5px 5px 0 5px',
    flex: '1',
  },
  siteStatic: {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap',
  },
  siteText: {
    textAlign: 'left',
    fontStyle: 'italic',
  },
  siteTitle: {
    fontSize: '20pt',
    fontWeight: 'bold',
  },
  siteTitleStatus: {
    fontSize: '20pt',
    fontWeight: 'bold',
    textShadow: `0px 1px 3px ${BASE_COLORS.black}`,
  },
  siteEnterprise: {
    fontSize: '10pt',
  },
  siteEnterpriseStatus: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1vh',
    fontSize: '10pt',
    fontStyle: 'italic',
  },
  result: {
    margin: '0 5px 0 5px',
    padding: '5px 5px 0 5px',
    borderBottom: `3px solid ${BASE_COLORS.black}`,
    flex: '1',
  },
  status: {
    margin: '0 5px 0 5px',
    padding: '5px 5px 0 5px',
    borderBottom: `3px solid ${BASE_COLORS.black}`,
    display: 'flex',
    flexFlow: 'column wrap',
    flex: '1',
  },
  statusFab: {
    position: 'absolute',
    top: '0',
    right: '0',
    display: 'flex',
    flexFlow: 'column wrap',
  },
  fab: {
    boxShadow: '0 0px 5px 2px rgba(0, 200, 100, .3)',
    marginBottom: '1vh',
  },
});
const SiteReportContainer = (props) => {
  const {
    siteReports,
    detailReports,
    navigateToReportDetails,
  } = props;
  const classes = useStyles();
  const { t } = useTranslation();
  function ChangeTime(timestamp) {
    const timeStatus = moment(timestamp);
    const now = moment();
    const lastStatus = timeStatus.from(now);
    return lastStatus;
  }
  // Because we are dispatching actions asynchronously we need to wait until data has loaded
  if (!siteReports.SiteReportEvaluationDto || !detailReports.DetailReportEvaluationDto) {
    return (
      <Paper className={classes.root}>
        <CircularProgress style={{ color: BASE_COLORS.ok }} />
      </Paper>
    );
  } else {
    const grouped = GroupBy(detailReports.IndividualDetailEvaluationsDtos, e => e.Category);
    const statics = grouped.get('Static');
    return (
      <div className={classes.root}>
        <Paper className={classes.site}>
          <div className={classes.siteText}>
            <Typography variant="caption">
              {t('showingStatus')}
              :
            </Typography>
          </div>
          <div className={classes.siteTitle}>
            {siteReports.SiteName}
          </div>
          <div className={classes.siteEnterprise}>
            {siteReports.EnterpriseName}
          </div>
          <div className={classes.siteStatic}>
            {<StaticComponent individualEvaluationDto={statics} />}
          </div>
        </Paper>
        <Paper
          className={classes.result}
          style={{ borderColor: SetColor(siteReports.SiteReportEvaluationDto.Result) }}
        >
          <div className={classes.siteText}>
            <Typography variant="caption">
              {t('reportStatus')}
              :
            </Typography>
          </div>
          <div
            className={classes.siteTitleStatus}
            style={{ color: SetColor(siteReports.SiteReportEvaluationDto.Result), fontSize: '40pt' }}
          >
            {siteReports.SiteReportEvaluationDto.Result}
          </div>
        </Paper>
        <Paper
          className={classes.status}
          style={{ borderColor: SetColor(detailReports.DetailReportEvaluationDto.Result) }}
        >
          <div style={{ position: 'relative' }}>
            <div className={classes.siteText}>
              <Typography variant="caption">
                {t('latestStatus')}
                :
              </Typography>
            </div>
            <div className={classes.statusFab}>
              <Fab
                className={classes.fab}
                color="primary"
                onClick={() => {
                  const siteId = siteReports.SiteId;
                  navigateToReportDetails(siteId);
                }}
                size="small"
              >
                {<Refresh />}
              </Fab>
            </div>
          </div>
          <div className={classes.siteTitle}>
            { ChangeTime(siteReports.TimeStamp) }
          </div>
          <div className={classes.siteEnterprise}>
            { moment(siteReports.TimeStamp).format('Do MMMM YYYY, kk:mm:ss') }
          </div>
          <div
            className={classes.siteEnterpriseStatus}
          >
            {`${t('curReport')}:` }
            <Typography
              variant="h6"
              style={{
                color: SetColor(detailReports.DetailReportEvaluationDto.Result),
                marginLeft: '7pt',
                textShadow: '0px 1px 2px #000000',
                fontStyle: 'normal',
              }}
            >
              {detailReports.DetailReportEvaluationDto.Result}
            </Typography>
          </div>
          <Typography variant="caption">
            <CheckIfTimestamp timestamp={detailReports.TimeStamp} />
          </Typography>
        </Paper>
      </div>
    );
  }
};
export default SiteReportContainer;
