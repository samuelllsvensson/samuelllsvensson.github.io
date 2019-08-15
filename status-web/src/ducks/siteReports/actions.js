
import { API_IP } from '../../constants/netConfig';
import * as types from './types';

const requestSiteReports = () => ({
  type: types.REQUEST_SITEREPORTS,
});

const receiveSiteReports = data => ({
  type: types.RECEIVE_SITEREPORTS,
  data,
});

const fetchSiteReports = (chosenSiteReportId) => dispatch => {
  if (!chosenSiteReportId) {
    return console.log('ERROR: ID');
  }
  dispatch(requestSiteReports());
  return fetch(`${API_IP}/api/sitereport/${chosenSiteReportId}`)
    .then(response => response.json())
    .then(json => dispatch(receiveSiteReports(json)))
    .catch(e => console.log(e));
};
const FetchSiteReportsIfNeeded = (id) => (dispatch, getState) => {
  const state = getState();
  const isFetching = state.siteReportState.isFetchingSiteReports;
  if (!isFetching) {
    dispatch(fetchSiteReports(id));
  }
};


export {
  FetchSiteReportsIfNeeded,
};
