# Promise

- `promise状态` 只能被修改一次
- `promise.then`: pending状态不执行, 等到有结果的时候再执行
- promise返回任何非promise值, 都会包装成一个promise对象, 算成功

- `promise返回值`:
    - 非promise值, 都会被包装成 promise 对象
    - 不能返回promise自身,否则会造成死循环

- `then catch`
    - 期望接收一个函数参数, 如果不是,就会发生值 透传.
    - then第二个参数 捕获错误 > .catch 捕获

- `async函数中 抛出错误, 就会终止,不会继续执行`