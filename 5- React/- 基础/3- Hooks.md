# Hooks
  
## 规则
1. 只能在最外层调用 Hook, 不能在循环. 条件判断或 子函数中调用
2. 只能在 `React的函数组件`和 `自定义Hook`中调用 Hook


- useState      : 保存组件自身状态的
- useEffect     : 生命周期
- useCallback   : 返回一个函数
- useMemo       : 返回一个值

- useContext    : 组件上下文
- useReducer    : 管理组件本地复杂的state

## 自定义Hooks
- `use` 开头是一种约定

## useEffect
- 与 `componentDidMount`、`componentDidUpdate` 和 `componentWillUnmount` 用途相同

```ts
useEffect(()=>{})           // 每次渲染后都会执行,包括第一次
useEffect(()=>{},[])        // 
useEffect(()=>{},[id])

// 通过返回一个函数来清除 副作用
useEffect(()=>{ 
    return function(){}
},[id])
```