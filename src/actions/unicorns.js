/**
 * Yet Another React Starter Kit
 *
 * Copyright © 2016 drjova. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import fetch from 'isomorphic-fetch';

import {
  RECEIVE_UNICORNS,
  REQUEST_UNICORNS,
  UNICORNS_API
} from '../constants';


// Request unicorns action
export function requestUnicorns() {
  return {
    type: REQUEST_UNICORNS
  };
}

// Receive unicorns action
export function receiveUnicorns(json) {
  return {
    type: RECEIVE_UNICORNS,
    items: json,
  };
}

// HELPERS

function shouldFetchUnicorns(state) {
  if (state.unicorns.items === undefined) {
    return true;
  }
  return false;
}

function fetchUnicorns() {
  return dispatch => {
    // Spread the news for requesting countries
    dispatch(requestUnicorns());
    // Fetch the countries
    return fetch(UNICORNS_API)
      .then(response => response.json())
      .then(json => dispatch(receiveUnicorns(json)));
  };
}

export function getUnicornsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchUnicorns(getState())){
      return dispatch(fetchUnicorns());
    }
  };
}
