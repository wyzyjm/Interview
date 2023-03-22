# Hooks

-   Hooks 的出现 让函数式组件可以拥有和 类式组件一样的功能, 也可以维护自身的 state, 而写法比类组件更清爽更简洁.
-   使用自定义 hooks 可以将公共逻辑抽取出来,供其它组件使用,
-   常用的 hooks 有:
    -   useEffect: 可以实现和类组件一样的生命周期,
        -   不加依赖的时候,组件每次更新完毕都会执行,
        -   依赖为空时, 相当于 componentDidMount,组件挂时执行一次
        -   添加依赖, 当依赖发生变化时,才会执行
    -   useState : 组件维护自身状态
    -   useCallback: 返回一个缓存的函数
    -   useMemo: 返回一个值,依赖不变 不会冲执行.这些 hooks 函数也 进一步提升了网站性能.
    -   useContext: 可以用于某一个模块间的传值.
    -   useRef: 用来获取组件实例.

```tsx
import { useState, useEffect } from "react"

function component(props) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count + 1)
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])
}
```
