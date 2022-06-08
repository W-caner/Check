# Check

课程设计：健康码行程码核查统计类app

## ChangeRec

- 强制提交了录屏版本，修复了饼图显示，二次提交闪退问题
- 增加了加入群组时自动生成任务，退出群组时自动删除记录，解决了android开启报错
- 创建任务详细列表显示群昵称，在isend视图中加了memname,picid，强制提交合并版本
- 新增了消息类，提供消息接口
- vue增加提交图片，显示图片
- 后端增加静态资源文件类映射用于浏览器访问本地文件
- 后端修改result的类型为String
- 后端修改消息部分，增加修改isread和删除消息
- 增加excel导出
- 合并readme，增加todolist
- 健康码行程码核查更换至腾讯api
- 修复了定时任务执行无法自动装载问题
- 增加导出图像
- 增加图片二次提交前显示前一次提交的图像
- 增加消息通知图标处提醒
- android端消息连接
- 二次审查
- 优化了部分界面
- 增加了”联系我们“，更新了Todo，删除了无用输出
## TODOList

### Web端

- [x] 主页的群组/任务/数据统计
- [x] 任务完成（图片提交）
- [x] 图片显示
- [x] 消息显示
- [x] 消息发送
- [ ] 个人中心
- [ ] UI主题
- [x] 导出excel
- [x] 导出图片
- [x] 开场动画（白屏bug）
- [x] 任务完成情况显示昵称
- [x] 图片的二次提交
- [ ] 开场动画
- [x] 审核更换腾讯api
- [ ] 部署至服务器
### Android端

- [x] 二次核查，修改结果
- [x] 添加管理员
- [ ] 页面跳转，能否调用手机的返回键
- [ ] picture显示，包括头像，异地登陆时的已提交图片
- [ ] 联系我们超链接设置
- [x] 饼图显示
- [x] 群发消息
- [x] 录屏
- [x] 任务显示群昵称
