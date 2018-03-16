// @flow

import React, { PureComponent } from 'react';
import './styles.less';

type Props = {
  curLink?: 'download' | 'reading',
}

class NavBar extends PureComponent<Props> {
  render() {
    const { curLink } = this.props;
    return (
      <div className="nav-bar">
        <h1 className="logo">
          <a href="http://daily.zhihu.com/" title="知乎日报" className="link-logo">知乎日报</a>
        </h1>
        <span>{curLink}</span>
      </div>
    );
  }
}

export default NavBar;
