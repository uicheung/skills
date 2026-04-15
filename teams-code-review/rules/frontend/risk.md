# 前端风险检测规则

## R1 - 逻辑断裂
- 删除了方法/函数/代码块但无替代实现
- 条件分支被删除导致场景未覆盖
- async/await/Promise 修改但错误处理缺失
- try/catch 被删除或 catch 块变空
- return 语句变化导致函数提前退出或不再返回值

## R2 - 数据流风险
- data/state 初始值变化但模板/方法未同步
- props/参数类型或默认值变化但调用方未同步
- Store/Context 结构变化但消费组件未更新
- API 返回结构变化但前端未适配（跨端联动）

## R3 - 副作用与资源管理遗漏
- 生命周期钩子被修改或删除（created/mounted/beforeDestroy/useEffect 等）
- 事件监听的 on/off 不配对（addEventListener/removeEventListener、$on/$off、EventBus 等）
- 定时器未清理（setTimeout/setInterval/setInterval 未清除）
- watch 的 deep/immediate 被修改
- 全局状态订阅未取消（如 WebSocket、SSE 连接）

## R4 - UI 交互风险
- 导航逻辑变化（push → replace 但未考虑页面栈/历史记录影响）
- 全局拦截器/中间件修改影响所有请求（axios interceptor、fetch wrapper 等）
- display:none / visibility 变化导致元素查询失败
- overflow 变化影响滚动和懒加载
- 弹窗/抽屉/模态框的打开/关闭逻辑变化
- 表单提交逻辑变化（校验时机、提交条件、防重复提交等）
- 动画/过渡逻辑变化导致交互时序异常

## R8 - 遗漏联动修改
- 修改了子组件的接口（props/emits）但调用方未同步
- 修改了公共组件但所有使用方未排查
- 修改了共享样式变量/设计 Token 但未检查所有引用处
- 修改了枚举/常量定义但未检查所有使用处
- 修改了路由配置但未更新导航守卫/菜单
- 修改了接口契约但前端未适配

## 前端特有检测重点
- **React**: useEffect 依赖数组变化、HOC/Render Props 逻辑变化、Context Provider value 引用变化
- **Vue**: 响应式数据解构丢失响应性（reactive 解构）、computed 缓存变化、provide/inject 变化
- **小程序**: 页面栈影响、setData 性能、自定义组件通信变化
