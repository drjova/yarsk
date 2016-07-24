/**
 * Yet Another React Starter Kit
 *
 * Copyright © 2016 drjova. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  getUnicornsIfNeeded,
} from '../actions/unicorns';

class Home extends Component {

  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(getUnicornsIfNeeded());
  }

  render() {
    const {isFetching, items} = this.props;
    return (
      <div>
        <br />
        {isFetching && 'Loading'}
        <br />
        <ul>
        {items.map((item, i) =>
          <li key={item.id}>
            <h2>{item.slug}</h2>
            <img src={item.images.fixed_height_still.url} />
          </li>
        )}
        </ul>
      </div>
    )
  }
}

const getVisibleUnicorns = (items) => {
  return (items.data !== undefined) ? items.data : [];
}

export default connect(
  state => {
    return {
      isFetching: state.unicorns.isFetching || false,
      items: getVisibleUnicorns(state.unicorns.items || []),
    }
  }
)(Home);
