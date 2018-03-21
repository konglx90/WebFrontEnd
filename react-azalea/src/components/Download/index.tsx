import * as React from 'react';
import './styles.less';

const classPrefix = 'download';

const sampleImg = require('../../images/phone_sample.png');
const qrcodeImg = require('../../images/qrcode.png');

// TODO 抽象出一个 DownloadButton 组件
class Download extends React.PureComponent {
  render() {
    return (
      <div className={`${classPrefix}`}>
        <div className="container-fixed-width f-display-flex f-flex-justify-between">
          <div className="sample-wrap">
            <img src={sampleImg} />
          </div>
          <div className="loaded">
            <h2>每天三次 每次七分钟</h2>
            <div className="info">
              在中国，资讯类移动应用的人均阅读时长是 5 分钟，而在知乎日报，这个数字是 21。
            </div>
            <div className="qrcode-wrap">
              <img src={qrcodeImg} />
            </div>
            <div className="link-button">
              <ul>
                <li className="link f-display-flex f-flex-justify-center f-flex-align-center">
                  <a>
                    <i className="icon" />
                    <span>iOS 版</span>
                  </a>
                </li>
                <li className="link f-display-flex f-flex-justify-center f-flex-align-center">
                  <a>
                    <i className="icon" />
                    <span>Android 版</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Download;
