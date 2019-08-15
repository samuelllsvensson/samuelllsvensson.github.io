import { API_IP } from '../../constants/netConfig';
import * as types from './types';

const toggleCheckbox = (id) => ({
  type: types.TOGGLE_CHECKBOX,
  id,
});

const requestSites = () => ({
  type: types.REQUEST_SITES,
});

const receiveSites = data => ({
  type: types.RECEIVE_SITES,
  data,
});

const fetchSites = (includeInactive) => dispatch => {
  dispatch(requestSites());
  return fetch(`${API_IP}/api/farm/all?includeInactive=${includeInactive}`)
    .then(response => response.json())
    .then(json => dispatch(receiveSites(json)))
    .catch(e => console.log(e));
};

const fetchSitesIfNeeded = () => (dispatch, getState) => {
  const state = getState();
  const isFetching = state.sitesState.isFetchingSites;
  const isInactiveToggled = state.sitesState.getInactiveSites;
  if (!isFetching) {
    dispatch(fetchSites(isInactiveToggled));
  }
};

export {
  fetchSitesIfNeeded,
  toggleCheckbox,
};
