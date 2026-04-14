# 前端分类规则

## A类 - 纯表面变更（不影响运行逻辑）

- CSS/SCSS/Less 属性值修改（颜色、间距、字号、圆角等）
- class 名称增删改（但该 class 不在 JS 中被动态绑定，如 :class="条件 ? 'a' : 'b'"）
- style 内联样式调整
- 纯视觉改动（不影响交互逻辑）
- 注释增删
- 代码格式化（缩进、空行、换行风格）
- import 重排序
- 变量/函数重命名（纯重命名，逻辑不变）
- 类型声明/接口定义增删（仅 TypeScript 类型，不含运行时逻辑）
- console.log / debugger 语句增删

## B类 - 功能变更（影响运行行为）

- data/computed/watch/methods/state 的修改
- 事件处理函数修改（@click、@change、onClick、onChange 等）
- 生命周期钩子修改（created、mounted、beforeDestroy、useEffect 等）
- 路由/导航逻辑变化（router.push、navigateTo、redirectTo 等）
- API 请求调用变化（url、参数、拦截器等）
- props/参数定义或使用变化
- 事件发射变化（$emit、emit、dispatch 等）
- 状态管理相关（store、Vuex、Pinia、Redux、Context 等）
- 条件渲染/列表渲染逻辑变化（v-if/v-show/v-for、conditional rendering 等）
- import/export 增删（涉及运行时依赖）
- template/JSX 中 DOM 节点的新增/删除（不只是改 class）
- 环境配置变化（环境变量、构建配置影响运行行为）

## C类 - 混合变更

同一文件同时存在 A类 和 B类

## 前端特有判定注意

- 动态 class 绑定涉及的 class 修改 = B类（如 :class="条件 ? 'a' : 'b'"、className={condition ? 'a' : 'b'}）
- template/JSX 中新增/删除了一个节点 = B类
- 改了 CSS 变量/SCSS 变量值但该变量被多处引用 = B类（影响范围不可控）
- 样式修改导致交互行为变化（如 display:none 影响事件绑定）= B类
- 宁可误判为 B，不可漏判
