import * as React from 'react';

import './styles.less';

export type linkType = 'download' | 'reading';

export interface NavBarProps {
  curLink?: linkType;
}

class NavBar extends React.PureComponent<NavBarProps> {
  static defaultProps = {
    curLink: 'download',
  };
  render() {
    const { curLink } = this.props;
    return (
      <div className="nav-bar f-fixed-top">
        <div className="nav-bar-content f-display-flex f-flex-justify-between">
          <h1 className="logo">
            <a href="http://daily.zhihu.com/" title="知乎日报" className="link-logo">知乎日报</a>
          </h1>
          <div className="right-button f-display-flex f-flex-align-center">
            <a className={`top-nav-link ${curLink === 'download' ? 'cur-link' : ''}`}>App 下载</a>
            <a className={`top-nav-link ${curLink === 'reading' ? 'cur-link' : ''}`}>浏览内容</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
