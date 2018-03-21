import * as React from 'react';

import './styles.less';

const firstLine: string = `
    知乎日报是一款拥有千万用户的资讯类客户端，每日提供来自知乎社区的精选问答，还有国内一流媒体的专栏特稿。
`;

const secondLine: string = `
    主题日报包括动漫、设计、大公司、游戏、财经、电影、电子音乐、互联网安全等丰富内容，
    为业内人和资深爱好者推荐各领域最精彩文章，满足高质量阅读需求。
`;

const thirdLine: string = `
    在知乎日报，告别浮躁，重获阅读的愉悦。
`;

class Footer extends React.PureComponent {
  render() {
    return (
      <div className="footer">
        <p>{firstLine}</p>
        <p>{secondLine}</p>
        <p>{thirdLine}</p>
      </div>
    );
  }
}

export default Footer;
