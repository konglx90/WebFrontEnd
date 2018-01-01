### 投票项目优化

- 减少每次请求加载的投票项, 变为10个, 足够了
- 重写瀑布流代码, 提高维护性
- 添加loading
- 加入单元测试, 端到端测试
- 使用serviceWorker 对静态资源进行缓存,减少cdn压力[视频](http://www.itdks.com/dakalive/detail/1350)
- 前端的服务化

### vue ssr

添加一个node中间层
