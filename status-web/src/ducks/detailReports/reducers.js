import * as types from './types';
/* eslint-disable no-case-declarations */

const INITIAL_STATE = {
  isFetchingDetailReports: false,
  isFetchingLatestDetailReports: false,
  detailReports: [],
  chosenSiteId: -1,
  lastSeenLatestReportId: -1,
  currentLatestReportId: -1,
  viewingLatest: true,
  hasNewReport: false,
};

const detailReports = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.REQUEST_DETAILREPORTS:
      return {
        ...state,
        isFetchingDetailReports: true,
      };
    case types.RECEIVE_DETAILREPORTS: {
      let { lastSeenLatestReportId, viewingLatest, currentLatestReportId } = state;
      if (action.isLatest) {
        currentLatestReportId = action.data.ReportId;
        lastSeenLatestReportId = action.data.ReportId;
        viewingLatest = true;
      } else if (action.data.ReportId === currentLatestReportId) {
        viewingLatest = true;
        lastSeenLatestReportId = action.data.ReportId;
      } else {
        viewingLatest = false;
      }
      return {
        ...state,
        detailReports: action.data,
        lastSeenLatestReportId,
        currentLatestReportId,
        hasNewReport: lastSeenLatestReportId !== currentLatestReportId,
        viewingLatest,
        isFetchingDetailReports: false,
      };
    }
    case types.REQUEST_LATEST_DETAILREPORTS:
      return {
        ...state,
        isFetchingLatestDetailReports: true,
      };
    case types.RECEIVE_LATEST_DETAILREPORTS: {
      let { lastSeenLatestReportId, detailReports } = state;
      const { viewingLatest } = state;
      const currentLatestReportId = action.data.ReportId;
      if (viewingLatest) {
        detailReports = action.data;
        lastSeenLatestReportId = action.data.ReportId;
      }
      return {
        ...state,
        detailReports,
        lastSeenLatestReportId,
        currentLatestReportId,
        hasNewReport: lastSeenLatestReportId !== currentLatestReportId,
        isFetchingLatestDetailReports: false,
      };
    }
    default:
      return state;
  }
};

export default detailReports;
