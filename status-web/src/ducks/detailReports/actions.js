import { push } from 'connected-react-router';
import { API_IP } from '../../constants/netConfig';
import * as types from './types';

const navigateToReportDetails = (siteId, reportId, offset) => dispatch => {
  if (reportId) {
    dispatch(push(`/report/siteId=${siteId}/reportId=${reportId}/offset=${offset}`));
  } else {
    dispatch(push(`/report/siteId=${siteId}`));
  }
};

// ----------FETCH-----------------
const requestDetailReports = () => ({
  type: types.REQUEST_DETAILREPORTS,
});
const receiveDetailReports = (data, isLatest) => ({
  type: types.RECEIVE_DETAILREPORTS,
  data,
  isLatest,
});

const fetchDetailReports = chosenSiteId => dispatch => {
  if (!chosenSiteId) {
    return console.log('ERROR: ID');
  }
  dispatch(requestDetailReports());
  return fetch(`${API_IP}/api/detailreport?id=${chosenSiteId}`)
    .then(response => response.json())
    .then(json => dispatch(receiveDetailReports(json, true)))
    .catch(e => console.log(e));
};
const FetchDetailReportsIfNeeded = (id) => (dispatch, getState) => {
  const state = getState();
  const isFetching = state.detailReportState.isFetchingDetailReports;
  if (!isFetching) {
    dispatch(fetchDetailReports(id));
  }
};

// ----------FETCH BY ID-----------------
const fetchDetailReportsById = (reportId, offset) => dispatch => {
  if (!reportId) {
    return console.log('ERROR: reportId');
  }
  if (!offset && offset !== 0) {
    return console.log('ERROR: offset');
  }
  dispatch(requestDetailReports());
  return fetch(`${API_IP}/api/detailreports/report?reportId=${reportId}&offset=${offset}`)
    .then(response => response.json())
    .then(json => dispatch(receiveDetailReports(json)))
    .catch(e => console.log(e));
};
const FetchDetailReportsByIdIfNeeded = (reportId, offset) => (dispatch, getState) => {
  const state = getState();
  const isFetching = state.detailReportState.isFetchingDetailReports;
  if (!isFetching) {
    dispatch(fetchDetailReportsById(reportId, offset));
  }
};

// ----------FETCH LATEST-----------------
const requestLatestDetailReports = () => ({
  type: types.REQUEST_LATEST_DETAILREPORTS,
});
const receiveLatestDetailReports = data => ({
  type: types.RECEIVE_LATEST_DETAILREPORTS,
  data,
});

const fetchLatestDetailReport = (chosenSiteId) => dispatch => {
  if (!chosenSiteId) {
    return console.log('ERROR: ID');
  }
  dispatch(requestLatestDetailReports());
  return fetch(`${API_IP}/api/detailreport?id=${chosenSiteId}`)
    .then(response => response.json())
    .then(json => dispatch(receiveLatestDetailReports(json)))
    .catch(e => console.log(e));
};
const FetchLatestDetailReportsIfNeeded = (id) => (dispatch, getState) => {
  const state = getState();
  const isFetching = state.detailReportState.isFetchingLatestDetailReports;
  if (!isFetching) {
    dispatch(fetchLatestDetailReport(id));
  }
};

export {
  navigateToReportDetails,
  FetchDetailReportsIfNeeded,
  FetchLatestDetailReportsIfNeeded,
  FetchDetailReportsByIdIfNeeded,
};
