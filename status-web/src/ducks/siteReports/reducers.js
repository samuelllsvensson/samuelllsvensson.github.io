import * as types from './types';

const INITIAL_STATE = {
  isFetchingSiteReports: false,
  siteReports: [],
  chosenSiteReportId: -1,
};

const siteReports = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.REQUEST_SITEREPORTS:
      return {
        ...state,
        isFetchingSiteReports: true,
      };
    case types.RECEIVE_SITEREPORTS:
      return {
        ...state,
        siteReports: action.data,
        isFetchingSiteReports: false,
      };
    default:
      return state;
  }
};

export default siteReports;
