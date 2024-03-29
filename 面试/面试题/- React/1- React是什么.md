# React 是什么?

1. 概念: 构建用户界面的 JS 库, 通过组件化的方式解决视图层开发复用的问题
2. 核心思想就是 组件化, 声明式, 通用性

    - 组件化: 优势在于视图的拆分和组件复用
    - 声明式: 优势在直观,让开发者可以像写 html 一样编写 DOM, 然后 babel 在编译它时 就是执行 React.createElement()函数,这也得益与 JSX
    - 通用性: 除了支持 web, 还可以用来开发 native,VR 等应用.主要依靠 虚拟 DOM 实现.

3. 缺点:
    - 作为视图层的框架,React 不像 VUE 一样提供一揽子解决方案, 像路由, http 请求什么的更多的是交给社区来做
    - 正是由于这一点, react 在做大型项目的时候 技术选型也比较费劲, 尤其在 Hooks 的流行的时代,寻找合适的开发库就显得比较重要了
    - 比如 Http 请求,如果单纯的使用 Axios,在组件中代码量都会很多, 我们当时就是结合了 `Redux toolkit`提供的一个`RTK Query`的东西, 一是它实现了数据缓存,二是使用方式上可以采用 hooks 的方式在组件中使用
    - 还有比如表单, 常用的 UI 框架,像 element, Antdsign, 微软的 flunt UI 等它们自身虽然有对表单的处理,但依旧用起来很麻烦, 我们就选取了一个`React-hook-form`的库
    - 像这些选型也是从平常看公众号,逛社区,看官网等总结的

## 版本迭代

-   16 版本
-   ## 17: 兼容 IE11
-   18:
    -   放弃了对 IE11 的支持
    -   入口: `createRoot`api, render 函数变了
    -   卸载: `unmount()`
