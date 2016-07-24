/**
 * Yet Another React Starter Kit
 *
 * Copyright © 2016 drjova. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Link, browserHistory } from 'react-router';

export default function App({ children }) {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        {' '}
        <Link to="/unicorn">Unicorn</Link>
      </header>
      <div>{children}</div>
    </div>
  )
}
