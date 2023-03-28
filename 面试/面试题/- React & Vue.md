# React 和 Vue 的对比

## 共同点

-   都是用来构建用户界面的 JavaScript 框架, 目的都是让减少 dom 操作, 提高页面性能.让开发者更方便的使用 js 来构建应用程序.
-   `声明式`:
-   `组件化`:
-   `客户端路由`:
-   `丰富的社区支持`: - 都支持编写测试脚本, 来确保应用行为. -
-   都有自己的构建工具.
-   都采用 MVVM 架构,然后使用了虚拟 dom, 通过 diff 算法来减少 dom 操作,提高页面性能

-   都支持 navtive 的方案

## 区别

-   数据流:

    -   react: 单向数据流
    -   Vue: 双向数据流, v-model 实现, 和 react 中受控组件差不多

-   用法不同

    -   react: jsx 语法, dom + 逻辑全部写在一起
    -   Vue: 是将 dom 和 逻辑分开来写,dom 采用 `template`语法.

-   diff 算法不同

    -   react: 需要更新哪些 dom,得到 patch 树,然后统一操作批量更新
    -   vue: 边对比边更新

-   组件通信
    -   跨代通信的时候
        -   Vue: provide/ inject 来实现
        -   React: Context 来实现, 外层 createContext, 后代 useContext 来使用
-   全局状态管理库的思想相同
    -   Vuex: `commit 同步`, `dispatch 异步`
    -   React: `dispatch(action)`
