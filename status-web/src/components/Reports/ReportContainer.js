import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/styles';

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import BottomNav from '../NavMenu/BottomNav';
import DetailReportContainer from './DetailReportContainer';
import SiteReportContainer from './SiteReportContainer';

import { fetchSitesIfNeeded } from '../../ducks/sites/actions';
import {
  navigateToReportDetails,
  FetchDetailReportsIfNeeded,
  FetchLatestDetailReportsIfNeeded,
  FetchDetailReportsByIdIfNeeded,
} from '../../ducks/detailReports/actions';
import {
  FetchSiteReportsIfNeeded,
} from '../../ducks/siteReports/actions';

import { BASE_COLORS } from '../../constants/colors';
import { autoUpdateTime } from '../../constants/netConfig';

const useStyles = makeStyles({
  root: {
    marginTop: '1vh',
    width: '80vw',
  },
  success: {
    backgroundColor: BASE_COLORS.ok,
    color: BASE_COLORS.white,
    minWidth: '100%',
  },
});
const ReportContainer = (props) => {
  const {
    detailReports,
    siteReports,
    match,
    FetchDetailReportsIfNeeded,
    FetchDetailReportsByIdIfNeeded,
    FetchLatestDetailReportsIfNeeded,
    FetchSiteReportsIfNeeded,
    navigateToReportDetails,
    chosenReportId,
    hasNewReport,
  } = props;
  const classes = useStyles();
  const { t } = useTranslation();
  const { siteId, reportId, offset } = match.params;
  useEffect(() => {
    FetchSiteReportsIfNeeded(siteId);
    if (reportId) {
      FetchDetailReportsByIdIfNeeded(reportId, offset);
    } else {
      FetchDetailReportsIfNeeded(siteId);
    }
    FetchLatestDetailReportsIfNeeded(siteId);

    const time = setInterval(() => {
      FetchSiteReportsIfNeeded(siteId);
      FetchLatestDetailReportsIfNeeded(siteId);
    }, autoUpdateTime);
    return () => clearInterval(time);
  }, [
    siteId,
    reportId,
    offset,
    FetchDetailReportsIfNeeded,
    FetchDetailReportsByIdIfNeeded,
    FetchLatestDetailReportsIfNeeded,
    FetchSiteReportsIfNeeded,
  ]);

  return (
    <div>
      <div className={classes.root}>
        <div>
          <SiteReportContainer siteReports={siteReports} detailReports={detailReports} navigateToReportDetails={navigateToReportDetails} />
        </div>
        <div>
          <DetailReportContainer detailReports={detailReports} />
          <BottomNav siteId={siteId} reportId={chosenReportId} hasNewReport={hasNewReport} navigateToReportDetails={navigateToReportDetails} />
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            open={hasNewReport}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
          >
            <SnackbarContent
              className={classes.success}
              message={<span id="message-id">{t('newReports')}</span>}
            />
          </Snackbar>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  detailReports: state.detailReportState.detailReports,
  isFetchingDetailReports: state.detailReportState.isFetchingDetailReports,
  siteReports: state.siteReportState.siteReports,
  chosenSiteId: state.detailReportState.chosenSiteId,
  chosenReportId: state.detailReportState.detailReports.ReportId,
  siteId: state.detailReportState.SiteId,
  hasNewReport: state.detailReportState.hasNewReport,
});

export default withRouter(connect(mapStateToProps, {
  FetchDetailReportsIfNeeded,
  FetchLatestDetailReportsIfNeeded,
  FetchDetailReportsByIdIfNeeded,
  FetchSiteReportsIfNeeded,
  fetchSitesIfNeeded,
  navigateToReportDetails,
})(ReportContainer));
