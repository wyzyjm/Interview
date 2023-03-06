# Promise 的理解

- Promise对象是一种 异步编程的解决方案, 
- Promise是一个构造函数,接收一个函数参数,
- new 出来的实例, 有三种 状态: 
  - pending:  初始状态
  - fulfiled: 成功
  - rejected: 失败
- 状态只能由 pengding -> fulfiled | rejected, 一旦改变就不能再变
  - Promise.reject()
  - Promise.resolve()
- 实例还有个 .then方法, 可以对promise结果进行处理, 接收两个回调函数作为参数, 第一个成功的回调,第二个失败的回调., 返回一个promise
- .catch()方法,捕获失败
- 静态方法:
  - `Promise.all([p1,p2])`   等待所有都完成, 或 第一个失败的结果
  - `Promise.race([p1,p2])`  第一个执行完的结果状态,成功就是成功,失败就是失败
  - 