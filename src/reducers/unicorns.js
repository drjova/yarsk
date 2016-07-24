/**
 * Yet Another React Starter Kit
 *
 * Copyright © 2016 drjova. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  RECEIVE_UNICORNS,
  REQUEST_UNICORNS
} from '../constants';

function unicornsHandler(state = {
  isFetching: false,
  items: []
}, action) {
  switch(action.type){
    case RECEIVE_UNICORNS:
      return {
        isFetching: false,
        items: action.items
      };
    case REQUEST_UNICORNS:
      return{
        isFetching: true,
        items: action.items
      };
    default:
      return state;
  }
}

export default function(state={}, action) {
  switch(action.type) {
    case RECEIVE_UNICORNS:
    case REQUEST_UNICORNS:
      return Object.assign(
        {},
        state,
        unicornsHandler(state, action)
      );
    default:
      return state;
  }
}
